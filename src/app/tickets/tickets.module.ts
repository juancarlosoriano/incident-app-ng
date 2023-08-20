import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from 'src/model/model.module';
import { RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [TicketsComponent],
  exports: [TicketsComponent],
})
export class TicketsModule {}
