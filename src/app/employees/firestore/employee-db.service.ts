import { Injectable, inject } from '@angular/core';
import { FirestoreModule, Firestore, collection, collectionData, addDoc, doc, setDoc, deleteDoc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDbService {
  constructor(private firestore: Firestore) { }

  employees: any[] = [];

  async getEmployees() {
    const employees = collection(this.firestore, 'employees');
    const e = await getDocs(employees);
    this.employees = e.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(this.employees);
    return this.employees;
  }

  async addEmployee(name: string, dob: string, city: string, salary: number, gender: string, email: string) {
    const employees = collection(this.firestore, 'employees');
    await addDoc(employees,
      { name, dateOfBirth: dob, city, salary, gender, email }
    );
    return this.getEmployees();
  }

}
