import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './map-core-view-component/view.component';
import { MapCoreService } from '@app/map-module/map-core-service/map-core.service';


@NgModule({
  // what this modules owns and creates (except services)
  declarations: [ViewComponent],
  // imports recursiverely comps from specified modules
  imports: [
    CommonModule
  ],
  providers: [MapCoreService],
  // public API, also we can specify here submodules to be re-exported their API
  exports: [ViewComponent]
})
export class MapModule { }
