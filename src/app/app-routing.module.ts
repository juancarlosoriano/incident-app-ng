import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home Page' },
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    data: { title: 'Tickets' },
  },
  {
    path: 'view-ticket/:id',
    component: ViewTicketComponent,
    data: { title: 'View Ticket' },
  },
  {
    path: 'edit-ticket/:id',
    component: EditTicketComponent,
    data: { title: 'Edit Ticket' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
