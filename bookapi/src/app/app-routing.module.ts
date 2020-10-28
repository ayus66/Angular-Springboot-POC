import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { bookComponent } from './book/book.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'bookapi', component: bookComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomp = [bookComponent,LoginComponent,RegisterComponent]