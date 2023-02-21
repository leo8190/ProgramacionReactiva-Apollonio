import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-tabla-estudiantes-promise',
  templateUrl: './tabla-estudiantes-promise.component.html',
  styleUrls: ['./tabla-estudiantes-promise.component.css']
})
export class TablaEstudiantesPromiseComponent implements OnInit {
  dataSource!: MatTableDataSource<Student>;
  columnas: string[] = ['id', 'createdAt', 'name', 'surname', 'email', 'documentNumber', 'isActive', 'phoneNumber']
  suscripcion!: Subscription;

  constructor(
    private estudiantesService: StudentService
  ){}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Student>();
    this.estudiantesService.getStudentsPromise().then((students: Student[]) => {
      this.dataSource.data = students;
    });
  }  
}