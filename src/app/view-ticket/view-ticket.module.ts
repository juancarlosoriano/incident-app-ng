import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from 'src/model/model.module';
import { ViewTicketComponent } from './view-ticket.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [ViewTicketComponent],
  exports: [ViewTicketComponent],
})
export class ViewTicketModule {}
