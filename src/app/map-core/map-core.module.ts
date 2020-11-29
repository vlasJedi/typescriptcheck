import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './map-core-view-component/view.component';



@NgModule({
  // what this modules owns and creates (except services)
  declarations: [ViewComponent],
  // imports recursiverely comps from specified modules
  imports: [
    CommonModule
  ],
  // public API, also we can specify here submodules to be re-exported their API
  exports: [ViewComponent]
})
export class MapCoreModule { }
