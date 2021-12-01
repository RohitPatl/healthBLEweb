import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchPipe } from './search.pipe';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientnamePipe } from './patientname.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PatientDataService } from './patient-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { CalenderComponent } from './calender/calender.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchPipe,
    PatientDetailsComponent,
    PatientnamePipe,
    CalenderComponent,
    SettingsComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [PatientDataService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
