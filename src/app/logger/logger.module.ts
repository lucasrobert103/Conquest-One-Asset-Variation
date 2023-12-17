import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerComponent } from './logger.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../material/material.module";
import { LoggerRoutingModule } from "./logger-routing.module";


@NgModule({
  declarations: [
    LoggerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    LoggerRoutingModule
  ]
})
export class LoggerModule {
}
