import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  initialized = false;

  constructor(public authService: AuthService) {
    this.authService.doInit();
  }

  async ngOnInit() {
    this.initialized = await this.authService.initialized;
  }
}
