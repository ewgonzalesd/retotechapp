import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.getMe();
    });
  }



  irInicio() {
    console.log("Ir al Inicio");
  }

  getMe() {

  }

}
