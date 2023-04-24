import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
    selector: 'mp-search-bar',
    templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit, OnDestroy {
    @Output() onTypeSearch = new EventEmitter();
    @Input() value: string = '';
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        this.debounce
            .pipe(debounceTime(300))
            .subscribe((filter) => this.onTypeSearch.emit(filter));
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

    debounceAndFilter(event: Event) {
        this.debounce.next((event.target as HTMLInputElement).value);
    }
}
