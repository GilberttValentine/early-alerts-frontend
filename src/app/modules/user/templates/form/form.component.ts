import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
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
