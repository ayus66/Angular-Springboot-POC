import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders } from '@angular/core';

import { AppRoutingModule,routingcomp } from './app-routing.module';
import { AppComponent } from './app.component';
import{bookComponent} from './book/book.component'
import{HttpClientModule} from '@angular/common/http'
import { bookService } from './book/book.service';
import{FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HomeComponent} from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    routingcomp,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    HttpClientModule
  ],
  providers: [bookService],
  bootstrap: [AppComponent]
})
// export class SampleModule {
//   static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: SampleModule,
//       providers: [bookService]
//     };
//   }
// }
export class AppModule { }
