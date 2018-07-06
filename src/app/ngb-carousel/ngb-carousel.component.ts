import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb-carousel',
  templateUrl: './ngb-carousel.component.html',
  styleUrls: ['./ngb-carousel.component.css']
})
export class NgbCarouselComponent implements OnInit {
  images: Array<string> = [
  "assets/img/wp1.jpg",
  "assets/img/wp7.png",
  "assets/img/wp8.jpg",
  "assets/img/wp9.jpg"
  ];

  constructor() { }

  ngOnInit() {
  }

}
