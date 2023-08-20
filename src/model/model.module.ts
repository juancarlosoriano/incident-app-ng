import { NgModule } from '@angular/core';
import { TicketRepository } from './ticket.repository';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@NgModule({
  providers: [TicketRepository, StaticDataSource, RestDataSource],
})
export class ModelModule {}
