import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from '../models/student.model';
import { of, map, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  estudiantes: Student[] = [
    {
     "createdAt": Date.now().toString(),
     "name": "Luciano",
     "email": "pardobio@gmail.com",
     "documentNumber": 34041944,
     "isActive": true,
     "phoneNumber": 3875060613,
     "surname": "Pardo",
     "id": 1
    },
    {
      "createdAt": Date.now().toString(),
      "name": "Layla",
      "email": "laylaa@gmail.com",
      "documentNumber": 32051444,
      "isActive": false,
      "phoneNumber": 3833333613,
      "surname": "Ardoin",
      "id": 2
     },
     {
      "createdAt": Date.now().toString(),
      "name": "Gabriel",
      "email": "gabrielr@gmail.com",
      "documentNumber": 32099994,
      "isActive": true,
      "phoneNumber": 32523523523,
      "surname": "Rodriguez",
      "id": 3
     },
     {
      "createdAt": Date.now().toString(),
      "name": "Maria",
      "email": "marias@gmail.com",
      "documentNumber": 23142314,
      "isActive": true,
      "phoneNumber": 124124124,
      "surname": "Santino",
      "id": 4
     }
   ]

  private estudiantes$!: BehaviorSubject<Student[]>;

  constructor() {
    this.estudiantes$ = new BehaviorSubject(this.estudiantes);

    of(this.estudiantes).pipe(
      map((students: Student[]) => {
        return students.filter((student: Student) => student.isActive === true)
      })
    ).subscribe((students)=>{
    });
  }

  getActiveStudents(): Observable<Student[]> {
    return this.getStudentsObservable().pipe(
       map(students => students.filter(student => student.isActive === true))
  )}

  getStudentsObservable(): Observable<Student[]> {
    return this.estudiantes$.asObservable();
  }  

  getStudentsPromise(): Promise<Student[]>{    
    return new Promise((resolve, reject) => {
      if(this.estudiantes != null){
        resolve(this.estudiantes);
      }else{
        reject([]);
      }
    });
  } 
}