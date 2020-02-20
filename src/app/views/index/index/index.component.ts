import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  slidesStore = [
    {
      id: 1,
      src: "assets/img/home/cat1.jpg",
      title: "cat1"
    },
    {
      id: 2,
      src: "assets/img/home/cat2.jpg",
      title: "cat2"
    },
    {
      id: 3,
      src: "assets/img/home/cat3.jpg",
      title: "cat3"
    },
    {
      id: 4,
      src: "assets/img/home/cat4.jpg",
      title: "cat4"
    },
    {
      id: 5,
      src: "assets/img/home/cat5.jpg",
      title: "cat5"
    },
    {
      id: 6,
      src: "assets/img/home/cat6.jpg",
      title: "cat6"
    },
    {
      id: 7,
      src: "assets/img/home/cat7.jpg",
      title: "cat7"
    },
    {
      id: 8,
      src: "assets/img/home/cat8.jpg",
      title: "cat8"
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    items: 3,
    margin: 10,
    center: true,
    autoplayTimeout: 2500
  };
}
