import { Component, OnInit } from '@angular/core';
import { OnlyText } from '../../model/onlyText';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})


export class ManageComponent implements OnInit {

  cities: { name: string, code: string }[] = [];
  selectedCity = { name: '', code: '' };
  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

  }

  ngOnInit(): void {

  }

}
