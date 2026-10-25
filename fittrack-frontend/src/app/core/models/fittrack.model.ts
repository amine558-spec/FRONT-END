export interface Programme {
  id?: number;
  nom: string;
  dateCreation?: string;
  estActif?: boolean;
}

export interface Exercice {
  id?: number;
  nom: string;
  groupeMusculaire?: string;
  estPersonnalise?: boolean;
}

export interface Serie {
  id?: number;
  numero?: number;
  poids: number;
  repetitions: number;
  exerciceId?: number;
  seanceId?: number;
}

export interface Seance {
  id?: number;
  date: string;
  type: string;
  dureeMinutes?: number;
  volumeTotal?: number;
  programme?: Programme;
}
