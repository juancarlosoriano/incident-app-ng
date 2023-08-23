import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home Page' },
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Tickets' },
  },
  {
    path: 'view-ticket/:id',
    component: ViewTicketComponent,
    canActivate: [AuthGuardService],
    data: { title: 'View Ticket' },
  },
  {
    path: 'edit-ticket/:id',
    component: EditTicketComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Edit Ticket' },
  },
  {
    path: 'new-ticket',
    component: NewTicketComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Add New Ticket' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' },
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
