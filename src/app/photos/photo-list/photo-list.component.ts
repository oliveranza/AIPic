import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { iPhoto } from '../photo/iPhoto.interface';
import { PhotoService } from '../photo/photo.service';

@Component({
    selector: 'mp-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit, OnDestroy {
    photosList: iPhoto[] = [];
    filterText: string = '';
    debounce: Subject<string> = new Subject<string>();
    hasMore: boolean = true;
    currentPage: number = 1;
    username: string = '';

    constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) {}

    ngOnInit(): void {
        this.username = this.activatedRoute.snapshot.params['username'];
        this.photosList = this.activatedRoute.snapshot.data['photos'];
        this.debounce.pipe(debounceTime(300)).subscribe((filter) => (this.filterText = filter));
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

    debounceAndFilter(event: Event) {
        this.debounce.next((event.target as HTMLInputElement).value);
    }

    loadMore() {
        this.photoService
            .listFromUserPaginatate(this.username, ++this.currentPage)
            .subscribe((newPhotos) => {
                this.photosList = this.photosList.concat(newPhotos);
                if (!newPhotos.length) {
                    this.hasMore = false;
                }
            });
    }
}
