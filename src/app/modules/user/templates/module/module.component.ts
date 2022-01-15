import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  code: String = "";

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(paramMap => {
      const code = paramMap.get('code');



      this.code = code!;
    });
  }

  ngOnInit(): void {
  }

}
