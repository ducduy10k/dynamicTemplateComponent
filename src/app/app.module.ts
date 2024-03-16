import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DynamicComponent,
  DynamicTestComponent,
} from './dynamic-test/dynamic-test.component';

@NgModule({
  declarations: [AppComponent, DynamicTestComponent, DynamicComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
