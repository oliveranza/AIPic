import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

import { PhotoService } from '../photo/photo.service';
import { iPhoto } from '../photo/iPhoto.interface';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<iPhoto[]>> {
  constructor(private photoService: PhotoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<iPhoto[]> {
    const username = route.params['username'];
    return this.photoService.listFromUserPaginatate(username, 1);
  }
}
