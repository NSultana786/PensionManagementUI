import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from 'src/services/auth.guard';
import { AuthInterceptor } from 'src/services/auth.interceptor';
import { LoginService } from 'src/services/login.service';
import { PensionDisbursementService } from 'src/services/pension-disbursement.service';
import { PensionerDetailService } from 'src/services/pensioner-detail.service';
import { ProcessPensionService } from 'src/services/process-pension.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PensionerDetailComponent } from './pensioner-detail/pensioner-detail.component';
import { ProcessPensionComponent } from './process-pension/process-pension.component';
import { NavBarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProcessPensionComponent,
    PensionerDetailComponent,
    NavBarComponent,
    HomeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [AuthGuard, LoginService, PensionDisbursementService, ProcessPensionService, PensionerDetailService, [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
