import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'mp-vmessage',
  templateUrl: './vmessage.component.html',
})
export class VMessageComponent implements OnInit, OnChanges {
  @Input() validators: { validator: string; msg: string }[];
  @Input() text = '';
  @Input() errors;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['errors'] && changes['errors']?.currentValue != null) {
      const chave = Object.keys(changes['errors']?.currentValue)[0];
      for (const val of this.validators) {
        if (val.validator === chave) {
          this.text = val.msg;
          break;
        }
      }
    }
  }
}
