import { Module } from 'module';
import { VMessageComponent } from './vmessage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [VMessageComponent],
  imports: [CommonModule],
  exports: [VMessageComponent],
})
export class VMessageModule {}
