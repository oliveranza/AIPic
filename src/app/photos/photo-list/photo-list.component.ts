import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { iPhoto } from '../photo/iPhoto.interface';
import { PhotoService } from '../photo/photo.service';

@Component({
    selector: 'mp-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
    photosList: iPhoto[] = [];
    filterText: string = '';
    hasMore: boolean = true;
    currentPage: number = 1;
    username: string = '';

    constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) {}

    ngOnInit(): void {
        this.username = this.activatedRoute.snapshot.params['username'];
        this.photosList = this.activatedRoute.snapshot.data['photos'];
        this.generatePhotoNumbers(this.photosList);
    }

    loadMore() {
        this.photoService
            .listFromUserPaginatate(this.username, ++this.currentPage)
            .subscribe((newPhotos) => {
                this.filterText = ''
                this.generatePhotoNumbers(newPhotos);
                this.photosList = this.photosList.concat(newPhotos);
                if (!newPhotos.length) {
                    this.hasMore = false;
                }
            });
    }

    /**
     * This method settes a mock number of likes and comments in iPhotos Objects
     * it's a selfmade personalization - that part isn't on the angular course
     * @param photos - list of photos to show
     */
    generatePhotoNumbers(photos: iPhoto[]): void {
        photos.map((photo) => {
            photo.likes = Math.round(Math.random() * 100);
            photo.comments = Math.round(Math.random() * 50);
        });
    }
}
