import { NgModule } from '@angular/core';
import { MinieditorComponent } from './minieditor.component';
import { MentionModule } from 'angular-mentions';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MinieditorComponent],
  imports: [
    MentionModule,
    CommonModule
  ],
  exports: [MinieditorComponent]
})
export class MinieditorVcModule { }
