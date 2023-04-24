import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoModule } from '../photo/photo.module';
import { FilterByDescriptionPipe } from './filterByDescription.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoRowComponent } from './photo-row/photo-row.component';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotoRowComponent, 
        LoadButtonComponent,
        FilterByDescriptionPipe
    ],
    imports: [
        CommonModule,
        PhotoModule
    ]
})
export class PhotoListModule {}
