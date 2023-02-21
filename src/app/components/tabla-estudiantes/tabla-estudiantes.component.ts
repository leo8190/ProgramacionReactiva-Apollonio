import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-tabla-estudiantes',
  templateUrl: './tabla-estudiantes.component.html',
  styleUrls: ['./tabla-estudiantes.component.css']
})
export class TablaEstudiantesComponent implements OnInit{
  students$!: Observable<Student[]>;

  constructor(
    private estudiantesService: StudentService
  ){}

  ngOnInit() {    
    this.students$ = this.estudiantesService.getActiveStudents();
  }
}