import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelModule } from 'src/model/model.module';
import { ViewTicketComponent } from './view-ticket.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [ViewTicketComponent],
  exports: [ViewTicketComponent],
})
export class ViewTicketModule {}
