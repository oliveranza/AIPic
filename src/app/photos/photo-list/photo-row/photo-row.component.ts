import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { iPhoto } from '../../photo/iPhoto.interface';

@Component({
  selector: 'mp-photo-row',
  templateUrl: './photo-row.component.html',
  styleUrls: ['./photo-row.component.scss'],
})
export class PhotoRowComponent implements OnChanges {
  @Input() photos: iPhoto[] = [];
  @Input() searchText: string ='';
  rows: iPhoto[][] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos']) {
      this.rows = this.groupColumns(this.photos);
    }
  }
  groupColumns(photos: iPhoto[]) {
    const newRow: iPhoto[][] = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRow.push(photos.slice(index, index + 3));
    }
    return newRow;
  }
}
