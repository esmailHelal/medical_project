import { Component, OnInit } from "@angular/core";
import { AdmainSerivesService } from "src/app/services/admain-serives.service";

declare var $: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  data: any = [];
  firstslide: any;
  secondslide: any;
  thirdslider:any;
  constructor(private _AdmainSerivesService: AdmainSerivesService) {}

  ngOnInit() {
    this.firstslide = {
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        },
        1200: {
          items: 1
        }
      },
      autoplay: false,
      loop: false,
      nav: true, // Show next and prev buttons
      dots: false,
      autoplaySpeed: 500,
      navSpeed: 500,
      dotsSpeed: 500,
      autoplayHoverPause: true,
      margin: 0
    };
    this.secondslide = {
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        },
        1200: {
          items: 1
        }
      },
      autoplay: true,
      loop: true,
      nav: false,
      dots: true,
      autoplaySpeed: 500,
      navSpeed: 500,
      dotsSpeed: 500,
      autoplayHoverPause: true,
      margin: 0
    };
    this.thirdslider={
      autoplay: false,
      loop: false,
      nav: true, // Show next and prev buttons
      dots: false,
      autoplaySpeed: 500,
      navSpeed: 500,
      dotsSpeed: 500,
      autoplayHoverPause: true,
      margin: 0,
      navText: [
        "<i class='fa fa-arrow-left'></i>",
        "<i class='fa fa-arrow-right'></i>"
      ],
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    }

    this.a();
    this.getarticler();

    

    $(".sphomeslider-inner-5").owlCarousel({
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      autoplay: false,
      autoplayTimeout: 2000,
      autoplaySpeed: 2000,
      smartSpeed: 500,
      autoplayHoverPause: true,
      startPosition: 0,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: 1,
      autoWidth: false,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      nav: true,
      loop: true,
      navText: [
        "<i class='fa fa-arrow-left'></i>",
        "<i class='fa fa-arrow-right'></i>"
      ],
      navClass: ["owl-prev", "owl-next"],
      responsive: {
        0: {
          items: 1 // In this configuration 1 is enabled from 0px up to 479px screen size
        }
      }
    });
   

    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      var x = days + " days " + hours + ":" + minutes + ":" + seconds;
      $(".item-time").html(x);
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(this.x);
        document.getElementById("time-item1").innerHTML = "EXPIRED";
      }
    }, 1000);

    $(".extraslider-inner").owlCarousel({
      margin: 0,
      slideBy: 1,
      autoplay: false,
      autoplay_hover_pause: false,
      autoplay_timeout: 100,
      autoplaySpeed: 100,
      smartSpeed: 100,
      startPosition: 0,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      autoWidth: false,
      responsive: {
        0: { items: 1 },
        480: { items: 1 },
        768: { items: 1 },
        992: { items: 1 },
        1200: { items: 1 }
      },
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: false,
      dotsSpeed: 1000,
      nav: true,
      loop: false,
      navSpeed: 1000,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
      ],
      navClass: ["owl-prev", "owl-next"]
    });
  }

  getproduct() {
    this._AdmainSerivesService.getproduct();
  }
  getarticler() {
    this._AdmainSerivesService.getarticler().subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

  a() {
    var slider_post = $(".lastest_posts");
    slider_post.owlCarousel({
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        },
        1200: {
          items: 1
        }
      },
      autoplay: false,
      loop: false,
      nav: true, // Show next and prev buttons
      dots: false,
      autoplaySpeed: 500,
      navSpeed: 500,
      dotsSpeed: 500,
      autoplayHoverPause: true,
      margin: 0
    });
  }
}
