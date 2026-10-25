import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Seance, Serie } from '../models/fittrack.model';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  private apiUrl = `${environment.apiUrl}/seances`;

  constructor(private http: HttpClient) {}

  createSeance(programmeId: number, seance: Seance): Observable<Seance> {
    return this.http.post<Seance>(`${this.apiUrl}?programmeId=${programmeId}`, seance);
  }

  addSerie(serie: Serie): Observable<Serie> {
    return this.http.post<Serie>(`${environment.apiUrl}/series`, serie);
  }

  getHistorique(): Observable<Seance[]> {
    return this.http.get<Seance[]>(this.apiUrl);
  }
}
