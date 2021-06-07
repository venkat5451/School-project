import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission/admission.component';
import { CareerComponent } from './career/career.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  
  {path:'login',component:LoginComponent},
  {path:'career',component:CareerComponent},
  {path:'admission',component:AdmissionComponent},
  {path:"**",component:PageErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
