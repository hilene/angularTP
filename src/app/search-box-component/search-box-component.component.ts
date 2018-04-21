import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box-component',
  templateUrl: './search-box-component.component.html',
  styleUrls: ['./search-box-component.component.css']
})
export class SearchBoxComponentComponent implements OnInit {
  text: string = "type here";
  constructor() { }

  ngOnInit() {
  }

}
