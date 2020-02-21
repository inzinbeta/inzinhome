import { Component, OnInit } from "@angular/core";
// import { OwlOptions } from "ngx-owl-carousel-o";
import { StarRatingComponent } from "ng-starrating";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // slides = [
  //   {
  //     id: 1,
  //     src: "assets/img/home/cat1.jpg",
  //     title: "cat1",
  //     desc:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //     likes: 5
  //   },
  //   {
  //     id: 2,
  //     src: "assets/img/home/cat2.jpg",
  //     title: "cat2",
  //     desc:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //     likes: 5
  //   },
  //   {
  //     id: 3,
  //     src: "assets/img/home/cat3.jpg",
  //     title: "cat3",
  //     desc:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //     likes: 5
  //   },
  //   {
  //     id: 4,
  //     src: "assets/img/home/cat4.jpg",
  //     title: "cat4",
  //     desc:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //     likes: 5
  //   },
  //   {
  //     id: 5,
  //     src: "assets/img/home/cat5.jpg",
  //     title: "cat5",
  //     desc:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //     likes: 5
  //   },
  //   {
  //     id: 6,
  //     src: "assets/img/home/cat6.jpg",
  //     title: "cat6",
  //     desc:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //     likes: 5
  //   },
  //   {
  //     id: 7,
  //     src: "assets/img/home/cat7.jpg",
  //     title: "cat7",
  //     desc:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //     likes: 5
  //   },
  //   {
  //     id: 8,
  //     src: "assets/img/home/cat8.jpg",
  //     title: "cat8",
  //     desc:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  //     likes: 5
  //   }
  // ];

  // customOptions: OwlOptions = {
  //   loop: true,
  //   autoplay: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   dots: false,
  //   items: 4,
  //   margin: 15,
  //   center: true,
  //   autoplayTimeout: 2500
  // };

  onRate($event: {
    oldValue: number;
    newValue: number;
    starRating: StarRatingComponent;
  }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
