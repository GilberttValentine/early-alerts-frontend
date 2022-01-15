import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'early-alerts';
  currentRouter;
  previousRouter = '';

  constructor(private router: Router) {
    this.currentRouter = this.router.url;
  }

  onActivate() {
    window.scroll(0, 0);

    const currentRouter = this.router.url;
    const previousRouter = this.currentRouter;

    this.previousRouter = previousRouter;
    this.currentRouter = currentRouter;

    localStorage.setItem('previous-router', previousRouter);
  }

}
