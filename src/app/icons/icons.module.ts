import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule, } from '@fortawesome/angular-fontawesome';
import { faChartLine, faFileLines, faMask, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  exports: [FontAwesomeModule],
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faMask, faChartLine, faFileLines, faCircleExclamation);
  }
}
