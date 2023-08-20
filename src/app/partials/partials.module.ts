import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BaseComponent } from './base/base.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [BaseComponent, HeaderComponent, FooterComponent],
  exports: [BaseComponent, HeaderComponent, FooterComponent],
})
export class PartialsModule {}
