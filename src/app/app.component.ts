import { Component } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { AuthenticationService } from "./_services/authentication.service";
import 'rxjs/add/operator/filter'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  logged: boolean;
  admin: boolean;
  encargado: boolean;
  chofer: boolean;
  cliente: boolean;

  constructor(
    private router: Router, 
    private authService: AuthenticationService) 
    {
      router.events.filter(e => e instanceof NavigationEnd).subscribe(e => {
        let token = localStorage.getItem('currentUser');
        if (token != null) {
          this.logged = true;
          authService.getProfile(token)
          .subscribe(
              (result)=>{
                this.getProfile(result);
              },
              (error)=>{
                console.error(error);
                this.logout();
              }
          );
        } else {
          this.logged = false;
        }
      });
  }

  logout(){
    this.authService.logout();
    this.logged = false;
    this.router.navigate(['/home']);
  }

  getProfile(id_profile){
    this.admin = false;
    this.cliente = false;
    this.chofer = false;
    this.encargado = false;
    switch (id_profile) {
      case 1:
        this.admin = true;
        break;
      
      case 2:
        this.encargado = true;
        break;

      case 3:
        this.chofer = true;
        break;

      case 4:
        this.cliente = true;
        break;

      default:
        break;
    }
  }
}
