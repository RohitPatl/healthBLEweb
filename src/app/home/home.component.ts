import { Component, OnInit } from '@angular/core';
import { Patients } from '../patients';
import { PatientDataService } from '../patient-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  patients: any = [];

  constructor(private patientData: PatientDataService) {

  }

  ngOnInit(): void {
    this.patientData.getPatientData().subscribe(data => {
      // console.log(data);
      this.patients = data;
    });
  }

  title = 'admin-app-ble';
  pageTitle: string = "HealthBLE";
  patientCount!: number;
  search: any;
  syncDate: Date = new Date();
  getReportStatusNormalCount = 0;
  getReportStatusCautionCount = 1;

  // getReportStatusNormalCount(): number {
  //   return this.patients.filter(e => e.medicalCondition === "NORMAL").length;
  // }
  // getReportStatusCautionCount(): number {
  //   return this.patients.filter(e => e.medicalCondition === "Critical1").length;
  // }

}
