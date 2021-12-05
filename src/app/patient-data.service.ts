import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patients } from './patients';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {

  constructor(private http: HttpClient) {

  }
  getPatientData(){
    let apiUrl = "http://ec2-18-188-150-226.us-east-2.compute.amazonaws.com:8080/api/patientData/";
    return this.http.get<Patients[]>(apiUrl);
  }
}
