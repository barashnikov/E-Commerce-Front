import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<nav class="navbar">

  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="./assets/img/logo.jpg">
    </a>
  </div>
</nav>
`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
