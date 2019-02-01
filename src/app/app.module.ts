import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AuthService} from './auth.service';
import { AuthGuard} from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path : 'register',
      component :RegisterComponent
    }])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
