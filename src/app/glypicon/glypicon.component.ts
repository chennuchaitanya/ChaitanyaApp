import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'glyphicon',
  templateUrl: './glypicon.component.html',
  styleUrls: ['./glypicon.component.css']
})
export class GlypiconComponent implements OnInit {

  isFavourite: boolean;
  constructor() { }
  onClick()
  {
    this.isFavourite = !this.isFavourite;
  }
  ngOnInit() {
  }

}
