import { Component, inject, OnInit } from '@angular/core';
import { EmployeeDbService } from "./firestore/employee-db.service";
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe, DatePipe]
})
export class EmployeesComponent {
  protected employees: EmployeeDbService = inject(EmployeeDbService);

  ngOnInit() {
    this.employees.getEmployees();
  }
}
