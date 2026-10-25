import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProgrammeService } from '../../../core/services/programme';
import { AuthService } from '../../../core/services/auth';
import { Programme } from '../../../core/models/fittrack.model';

@Component({
  selector: 'app-programme-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './programme-list.html',
  styleUrls: ['./programme-list.scss']
})
export class ProgrammeListComponent implements OnInit {
  programmes: Programme[] = [];
  programmeForm!: FormGroup;
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private programmeService: ProgrammeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.programmeForm = this.fb.group({
      nom: ['', Validators.required]
    });
    this.loadProgrammes();
  }

  loadProgrammes(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.programmeService.getProgrammes().subscribe({
      next: (data) => {
        this.programmes = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des programmes.';
        this.isLoading = false;
      }
    });
  }

  createProgramme(): void {
    if (this.programmeForm.valid) {
      this.programmeService.createProgramme(this.programmeForm.value.nom).subscribe({
        next: () => {
          this.programmeForm.reset();
          this.loadProgrammes();
        },
        error: () => {
          this.errorMessage = 'Erreur lors de la création du programme.';
        }
      });
    }
  }

  renameProgramme(prog: Programme): void {
    if (!prog.id) return;

    const nouveauNom = prompt('Nouveau nom du programme :', prog.nom);
    if (nouveauNom && nouveauNom.trim() !== '') {
      this.programmeService.updateProgramme(prog.id, nouveauNom.trim()).subscribe({
        next: () => {
          this.loadProgrammes();
        },
        error: () => {
          alert('Erreur lors de la modification du programme.');
        }
      });
    }
  }

  deleteProgramme(id?: number): void {
    if (!id) return;

    if (confirm('Êtes-vous sûr de vouloir supprimer ce programme ? Cette action est irréversible.')) {
      this.programmeService.deleteProgramme(id).subscribe({
        next: () => {
          this.programmes = this.programmes.filter(p => p.id !== id);
        },
        error: (err) => {
          alert('Erreur lors de la suppression du programme.');
        }
      });
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
