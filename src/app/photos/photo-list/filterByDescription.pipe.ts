import { Pipe, PipeTransform } from '@angular/core';
import { iPhoto } from '../photo/iPhoto.interface';

@Pipe({ name: 'FilterByDescription' })
export class FilterByDescriptionPipe implements PipeTransform {
  
  transform(photoList: iPhoto[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();
    if (descriptionQuery) {
      return photoList.filter((photo) =>
        photo.description.toLowerCase().includes(descriptionQuery)
      );
    } else {
      return photoList;
    }
  }
}
