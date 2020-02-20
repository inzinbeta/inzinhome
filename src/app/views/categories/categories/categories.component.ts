import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  slidesStore = [
    {
      id: 1,
      src: "assets/img/home/partner1.png",
      title: "partner1"
    },
    {
      id: 2,
      src: "assets/img/home/partner2.png",
      title: "partner2"
    },
    {
      id: 3,
      src: "assets/img/home/partner3.png",
      title: "partner3"
    },
    {
      id: 4,
      src: "assets/img/home/partner4.png",
      title: "partner4"
    },
    {
      id: 5,
      src: "assets/img/home/partner5.png",
      title: "partner5"
    },
    {
      id: 6,
      src: "assets/img/home/partner1.png",
      title: "partner1"
    },
    {
      id: 7,
      src: "assets/img/home/partner2.png",
      title: "partner2"
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    margin: 35,
    items: 7,
    center: true,
    autoplayTimeout: 2500
  };
}
