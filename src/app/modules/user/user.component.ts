import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentRouter;
  previousRouter = '';

  constructor(private router: Router) {
    const currentRouter = localStorage.getItem('previous-router');

    this.currentRouter = currentRouter ? currentRouter : '/';
  }

  ngOnInit(): void {
  }

  onActivate() {
    window.scroll(0, 0);

    const currentRouter = this.router.url;
    const previousRouter = this.currentRouter;

    this.previousRouter = previousRouter;
    this.currentRouter = currentRouter;

    localStorage.setItem('previous-router', previousRouter);

    console.log(`Previous Router: ${this.previousRouter}`);
  }

}
