import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TicketsModule } from './tickets/tickets.module';
import { ViewTicketModule } from './view-ticket/view-ticket.module';
import { EditTicketModule } from './edit-ticket/edit-ticket.module';

import { HomeComponent } from './pages/home/home.component';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { PartialsModule } from './partials/partials.module';
import { NewTicketModule } from './new-ticket/new-ticket.module';

import {
  JwtModule,
  JwtHelperService,
  JwtInterceptor,
} from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

export function jwtTokenGetter(): string {
  return localStorage.getItem('id_token') || '';
}

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    RegisterModule,
    TicketsModule,
    PartialsModule,
    ViewTicketModule,
    EditTicketModule,
    NewTicketModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
