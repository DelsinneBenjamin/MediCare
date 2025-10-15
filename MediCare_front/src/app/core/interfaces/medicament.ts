export interface Medicament {
id: number;
name_m: string;
}

export interface MedicamentRecord {
id: number;
medicament: Medicament;
quantity: number;
}

export interface PatientRecord {
id: number;
date_o: string; // ou Date si tu veux le parser
contentReport_o: string;
medicaments: MedicamentRecord[];
}
