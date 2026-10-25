import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Programme } from '../models/fittrack.model';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {
  private apiUrl = `${environment.apiUrl}/programmes`;

  constructor(private http: HttpClient) {}

  getProgrammes(): Observable<Programme[]> {
    const id = localStorage.getItem('utilisateurId');
    return this.http.get<Programme[]>(`${this.apiUrl}/utilisateur/${id}`);
  }

  createProgramme(nom: string): Observable<string> {
    const id = localStorage.getItem('utilisateurId');
    return this.http.post(`${this.apiUrl}?utilisateurId=${id}`, { nom: nom }, { responseType: 'text' });
  }

  updateProgramme(id: number, nom: string): Observable<string> {
    return this.http.put(`${this.apiUrl}/${id}`, { nom: nom }, { responseType: 'text' });
  }

  deleteProgramme(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
}
