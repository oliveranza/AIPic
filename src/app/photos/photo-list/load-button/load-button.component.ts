import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mp-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.scss']
})
export class LoadButtonComponent implements OnInit {

  @Input()
  public hasMore: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
