import { Component, inject } from "@angular/core";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { viewBindings, DataType } from "@vision/nativescript-data";
import { take } from "rxjs";

@Component({
  selector: "ns-detail",
  templateUrl: "./detail.component.html",
})
export class DetailComponent {
  router = inject(RouterExtensions);
  activeRoute = inject(ActivatedRoute);
  ui = viewBindings;
  id: DataType;
  orbitData;

  constructor() {
    this.activeRoute.paramMap.pipe(takeUntilDestroyed()).subscribe(params => {
      this.id = params.get('id') as DataType;
      if (this.id === 'orbit') {
        // only init Orbital data when showing Orbit view
        this.orbitData = this.ui.orbitData;
    }
    })
  }

  close() {
    this.router.back();
  }
}
