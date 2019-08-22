import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { FeatureModule } from '../feature/feature.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, FeatureModule],
  exports: [AboutComponent]
})
export class AboutModule {}
