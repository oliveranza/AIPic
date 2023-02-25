import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { CommonModule } from '@angular/common';
import { PhotoRowComponent } from './photo-list/photo-row/photo-row.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotoRowComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
})
export class PhotosModule {}
