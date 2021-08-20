import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  products = [
    {id: 'cat', name: 'Cat'},
    {id: 'dog', name: 'Dog'},
    {id: 'hamster', name: 'Hamster'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
