import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { iPhoto } from '../../photo/iPhoto.interface';

@Component({
  selector: 'mp-photo-row',
  templateUrl: './photo-row.component.html',
  styleUrls: ['./photo-row.component.scss']
})
export class PhotoRowComponent implements OnChanges {

  @Input() photos: iPhoto[] = [];
  rows: iPhoto[][] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['photos']){
      this.rows = this.groupColumns(this.photos);
    }
  }
  groupColumns(photos: iPhoto[]) {
    const newRow:iPhoto[][] = [];
    while (photos.length>0){
      newRow.push(photos.splice(0, 3));
    }
    console.log(newRow);
    return newRow;
  }

}
