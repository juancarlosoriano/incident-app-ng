import { NgModule } from '@angular/core';
import { TicketRepository } from './ticket.repository';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { AuthService } from './auth.service';

@NgModule({
  providers: [TicketRepository, StaticDataSource, RestDataSource, AuthService],
})
export class ModelModule {}
