import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';
import { SharePrimengModule } from '../model/share_primeng.modules';

@NgModule({
  imports: [
    CommonModule,
    SharePrimengModule
  ],
  declarations: [ManageComponent],
  exports: [ManageComponent]

})
export class ComponentModuleModule { }
