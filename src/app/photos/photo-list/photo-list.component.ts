import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iPhoto } from '../photo/iPhoto.interface';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'mp-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photosList: iPhoto[] = [];
  filter: string = '';

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute  
  ) {}

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.params['username'];
    this.photoService.listFromUser(username).subscribe((photos) => {
      this.photosList = photos;
    });
  }

  filtrar(event: Event){
    this.filter = (event.target as HTMLInputElement).value;
  }

}