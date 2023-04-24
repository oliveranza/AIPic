import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'mp-card',
    templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
    @Input() title: string = '';

    ngOnInit(): void {}
}
