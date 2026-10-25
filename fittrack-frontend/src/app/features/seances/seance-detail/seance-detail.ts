import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeanceService } from '../../../core/services/seance';
import { ProgrammeService } from '../../../core/services/programme';
import { ExerciceService } from '../../../core/services/exercice';
import { Serie, Programme, Exercice } from '../../../core/models/fittrack.model';

@Component({
  selector: 'app-seance-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './seance-detail.html',
  styleUrls: ['./seance-detail.scss']
})
export class SeanceDetailComponent implements OnInit {
  seanceForm!: FormGroup;
  serieForm!: FormGroup;
  programmes: Programme[] = [];
  exercices: Exercice[] = [];
  seriesLog: Serie[] = [];
  volumeTotal: number = 0;
  isSeanceActive: boolean = false;
  seanceId?: number;
  errorMessage: string = '';
  serieMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private seanceService: SeanceService,
    private programmeService: ProgrammeService,
    private exerciceService: ExerciceService
  ) {}

  ngOnInit(): void {
    this.seanceForm = this.fb.group({
      programmeId: ['', Validators.required],
      date: [new Date().toISOString().substring(0, 10), Validators.required],
      type: ['MUSCULATION', Validators.required]
    });

    this.serieForm = this.fb.group({
      exerciceId: ['', Validators.required],
      poids: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
      repetitions: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });

    this.programmeService.getProgrammes().subscribe({
      next: (data) => {
        this.programmes = data;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger tes programmes.';
      }
    });

    this.exerciceService.getExercices().subscribe({
      next: (data) => {
        this.exercices = data;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger les exercices.';
      }
    });
  }

  demarrerSeance(): void {
    if (this.seanceForm.valid) {
      this.errorMessage = '';
      const programmeId = Number(this.seanceForm.value.programmeId);
      const nouvelleSeance = {
        date: this.seanceForm.value.date,
        type: this.seanceForm.value.type
      };

      this.seanceService.createSeance(programmeId, nouvelleSeance).subscribe({
        next: (res) => {
          this.seanceId = res.id;
          this.isSeanceActive = true;
        },
        error: () => {
          this.errorMessage = 'Erreur lors de la création de la séance.';
        }
      });
    }
  }

  ajouterSerie(): void {
    if (this.serieForm.valid) {
      this.serieMessage = '';
      const nouvelleSerie: Serie = {
        numero: this.seriesLog.length + 1,
        poids: parseFloat(this.serieForm.value.poids),
        repetitions: parseInt(this.serieForm.value.repetitions, 10),
        exerciceId: Number(this.serieForm.value.exerciceId),
        seanceId: this.seanceId
      };

      this.seanceService.addSerie(nouvelleSerie).subscribe({
        next: () => {
          this.seriesLog.push(nouvelleSerie);
          this.recalculerVolume();
          this.serieForm.patchValue({ poids: '', repetitions: '' });
        },
        error: () => {
          this.serieMessage = 'Série non enregistrée sur le serveur (ajoutée seulement en local).';
          this.seriesLog.push(nouvelleSerie);
          this.recalculerVolume();
          this.serieForm.patchValue({ poids: '', repetitions: '' });
        }
      });
    }
  }

  private recalculerVolume(): void {
    this.volumeTotal = this.seriesLog.reduce((acc, s) => acc + (s.poids * s.repetitions), 0);
  }
}
