interface User {
  id: number;
  username: string;
  email: string;
  role: 'doctor' | 'patient';
  doctor?: Doctor;
  patient?: Patient;
}