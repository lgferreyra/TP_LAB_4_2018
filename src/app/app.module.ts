import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JwtModule } from '@auth0/angular-jwt';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { CustomMaterialModule } from "./_core/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './_guards/auth.guard';
import { ProfileGuard } from './_guards/profile.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { GeolocationService } from "./_services/geolocation.service";
import { ReCaptchaModule } from "angular2-recaptcha";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SucursalBoardComponent } from './sucursal-board/sucursal-board.component';
import { RegistroComponent } from './registro/registro.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ViajeFormComponent } from './viaje-form/viaje-form.component';
import { DomicilioService } from './_services/domicilio.service';
import { VehiculoFormComponent } from './vehiculo-form/vehiculo-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { AgmCoreModule } from '@agm/core'            // @agm/core
import { AgmDirectionModule } from 'agm-direction'   // agm-direction

export function tokenGetter() {
  return localStorage.getItem('currentUser');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SucursalBoardComponent,
    RegistroComponent,
    UserFormComponent,
    ViajeFormComponent,
    VehiculoFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ReCaptchaModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    }),
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyA-FowwXJQObnQv6el2beO-WT9GF3KtW4U',
    }),
    AgmDirectionModule      // agm-direction
  ],
  providers: [
    AuthGuard,
    ProfileGuard,
    AuthenticationService,
    UserService,
    DomicilioService,
    GeolocationService
    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
