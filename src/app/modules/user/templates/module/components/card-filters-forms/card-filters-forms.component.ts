import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-filters-forms',
  templateUrl: './card-filters-forms.component.html',
  styleUrls: ['./card-filters-forms.component.css']
})
export class CardFiltersFormsComponent implements OnInit {

  filterData: FormGroup;
  maxDate = '';

  constructor(private fb: FormBuilder, private router: Router) {
    const currentDate = this.getCurrentDate();
    this.maxDate = currentDate;

    this.filterData = this.fb.group({
      filter: ['all', Validators.required],
      date: [currentDate],
    });
  }

  ngOnInit(): void {
  }

  getCurrentDate(): string {
    const today = new Date();

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    const dateInputFormat = formatDate(`${currentYear}-${currentMonth}-${currentDay}`, 'yyyy-MM-dd', 'en');

    return dateInputFormat;
  }

  applyFilter(): void {
    const filter = this.filterData.controls['filter'];
    let date = this.filterData.controls['date'].value;

    if (filter.value !== 'date-modules') {
      date = '';
    }

    const currentUrl = this.router.url;

    console.log(filter.value);
    console.log(date);
  }
}
