import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from "./../app.component";
 
import { AuthenticationService } from '../_services/authentication.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private app: AppComponent) { }
 
    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
        //this.app.logout();
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/home']);
                } else {
                    // login failed
                    this.error = 'Correo electrónico o contraseña incorrectos';
                    this.loading = false;
                }
            },
            error => {
              console.log(error);
              this.error = 'Correo electrónico o contraseña incorrectos';
              this.loading = false;
            });
    }

    mockUser(email : String, password : String){
        this.model.email = email;
        this.model.password = password;
    }
}
