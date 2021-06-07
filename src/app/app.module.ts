import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CareerComponent } from './career/career.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { HomeComponent } from './home/home.component';

import {ReactiveFormsModule,FormsModule,FormGroup} from '@angular/forms';
import { AdmissionComponent } from './admission/admission.component';
import { RockService } from './rock.service';
import {HttpClientModule} from '@angular/common/http'

//

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CareerComponent,
    PageErrorComponent,
    HomeComponent,
    AdmissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
