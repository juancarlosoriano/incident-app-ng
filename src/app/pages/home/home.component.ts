import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/partials/base/base.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent extends BaseComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    super(route);
  }

  override ngOnInit(): void {}
}
