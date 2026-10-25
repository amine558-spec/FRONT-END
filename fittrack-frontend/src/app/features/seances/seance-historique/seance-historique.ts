import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeanceService } from '../../../core/services/seance';
import { Seance } from '../../../core/models/fittrack.model';

@Component({
  selector: 'app-seance-historique',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './seance-historique.html',
  styleUrls: ['./seance-historique.scss']
})
export class SeanceHistoriqueComponent implements OnInit {
  historique: Seance[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private seanceService: SeanceService) {}

  ngOnInit(): void {
    this.loadHistorique();
  }

  loadHistorique(): void {
    this.isLoading = true;
    this.seanceService.getHistorique().subscribe({
      next: (data) => {
        this.historique = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors du chargement de l\'historique.';
        this.isLoading = false;
      }
    });
  }

  get paginatedHistorique(): Seance[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.historique.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.historique.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
