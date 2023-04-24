import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from 'src/app/shared/components/card/card.module';
import { BrightOnHoverModule } from 'src/app/shared/directives/bright-on-hover.module';
import { PhotoModule } from '../photo/photo.module';
import { FilterByDescriptionPipe } from './filterByDescription.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoRowComponent } from './photo-row/photo-row.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotoRowComponent, 
        LoadButtonComponent,
        FilterByDescriptionPipe,
        SearchBarComponent,
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        BrightOnHoverModule,
    ]
})
export class PhotoListModule {}
