import { Component, inject } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { viewBindings } from "@vision/nativescript-data";

@Component({
  selector: "ns-detail",
  templateUrl: "./detail.component.html",
})
export class DetailComponent {
  ui = viewBindings;
  router = inject(RouterExtensions);

  close() {
    this.router.back();
  }
}
