import { NgModule } from '@angular/core';
import { MinieditorComponent } from './minieditor.component';
import { MentionModule } from 'angular-mentions';

@NgModule({
  declarations: [MinieditorComponent],
  imports: [
    MentionModule
  ],
  exports: [MinieditorComponent]
})
export class MinieditorVcModule { }
