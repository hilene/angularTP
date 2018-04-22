import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-box-component-3',
  templateUrl: './search-box-component-3.component.html',
  styleUrls: ['./search-box-component-3.component.css']
})
export class SearchBoxComponent3Component implements OnInit {
  @Input()
  text: string = "type here";
  constructor() { }
  clear(user) {
    /* Ajouter une fonction clear pour effacer le contenu du champ */
    console.log('cleared' + user.value);
    user.value = '';
  }
  ngOnInit() {
  }
}
