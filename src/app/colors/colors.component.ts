import { ColorsService } from './../colors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'colors',
  template: `
          <h2>{{title}} Colors</h2>
          <ul>
            <li *ngFor="let color of colors">
              {{color}}
            </li>
          </ul>
  `

})
export class ColorsComponent {
colors;
title;
  constructor(service: ColorsService) {
    this.colors = service.getColors();
    this.title = service.getNumber();
   }

}
