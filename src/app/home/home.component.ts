import { environment } from './../../environments/environment';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//  backgroundColor=environment.navbarColor;

  constructor(private authService: AuthService) { }
}
