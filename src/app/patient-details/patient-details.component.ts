import { Component, OnInit } from '@angular/core';
import { Patients } from '../patients';
import { PatientDataService } from '../patient-data.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patients: any[] = [];

  constructor(private patientDataInDetail: PatientDataService) {

  }

  ngOnInit(): void {
    this.patientDataInDetail.getPatientData().subscribe(data => {
      this.patients = data;
    });
  }

  pageTitle: string = "HealthBLE";
  patientCount: number = 0;
  syncDate: Date = new Date(2020, 0, 20, 12, 15, 55);
  search: any;

  //Variables to show in the Modal Popup
  name: string = '';
  age: number = 0;
  gender!: string;
  bloodGroup!: string;
  address!: string;
  contactNumber!: string;
  email!: string;
  medicalCond!: string;
  date: any;
  spO2: any;
  pulseRate: any;
  pulseImpulse: any;
  temperature: any;

  // pageSize: number = 25;
  // page: number = 1;
  p: number = 1;

  showDetails(patientData: Patients) {
    this.name = patientData.firstName +" "+ patientData.lastName;
    this.age = patientData.age;
    this.gender = patientData.gender;
    this.bloodGroup = patientData.bloodgrp;
    this.address = patientData.address;
    this.contactNumber = patientData.contactNo;
    this.email = patientData.email;
    this.medicalCond = patientData.medicalCondition;
    this.date = patientData.date;
    this.spO2 = patientData.spO2;
    this.pulseRate = patientData.pulseRate;
    this.pulseImpulse = patientData.pulseImpulse;
    this.temperature = patientData.temperature;
  }

}
