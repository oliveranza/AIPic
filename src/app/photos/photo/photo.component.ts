import { Component, Input } from '@angular/core';

@Component({
  selector: 'mp-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent {

  @Input() url = '';
  @Input() description = '';

  constructor(){}
  
}
