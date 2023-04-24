import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[mpBrightOnHover]',
})
export class BrightOnHover {

    @Input() color1: string = '#fc60e5';
    @Input() color2: string = '#00bbff';
    constructor(private ele: ElementRef, private render: Renderer2) {}
    
    @HostListener('mouseover')
    brightOn() {
        this.render.setStyle(
            this.ele.nativeElement,
            'filter',
            `drop-shadow(3px 2px 20px ${this.color1})` +
            `drop-shadow(-2px -3px 20px ${this.color2})`
        );
    }

    @HostListener('mouseleave')
    brightOff() {
        this.render.removeStyle(this.ele.nativeElement, 'filter');
    }
}
