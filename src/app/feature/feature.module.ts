import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HurzPipe } from './hurz.pipe';

@NgModule({
  declarations: [HurzPipe],
  exports: [HurzPipe],
  imports: [CommonModule]
})
export class FeatureModule {}
