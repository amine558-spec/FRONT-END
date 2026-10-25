import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Exercice } from '../models/fittrack.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  private apiUrl = `${environment.apiUrl}/exercices`;

  constructor(private http: HttpClient) {}

  getExercices(): Observable<Exercice[]> {
    return this.http.get<Exercice[]>(this.apiUrl);
  }
}
