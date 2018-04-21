import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-box-component-2',
  templateUrl: './search-box-component-2.component.html',
  styleUrls: ['./search-box-component-2.component.css']
})
export class SearchBoxComponent2Component implements OnInit {
  @Input('placeholder')
  text: string = "type here";
  constructor() { }

  ngOnInit() {
  }
}
