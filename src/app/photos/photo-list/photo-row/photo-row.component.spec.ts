import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRowComponent } from './photo-row.component';

describe('PhotoRowComponent', () => {
  let component: PhotoRowComponent;
  let fixture: ComponentFixture<PhotoRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
