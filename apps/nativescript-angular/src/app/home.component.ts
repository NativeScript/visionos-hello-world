import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Color,
  ModalTransition,
  Page,
  PageTransition,
  SharedTransition,
} from '@nativescript/core';
import { setupSwiftUI, viewBindings } from '@vision/nativescript-data';
import { NativeDialogService, RouterExtensions } from '@nativescript/angular';
import { DetailComponent } from './detail.component';
setupSwiftUI();

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  ui = viewBindings;
  router = inject(RouterExtensions);
  activeRoute = inject(ActivatedRoute)
  page = inject(Page);
  nativeDialog = inject(NativeDialogService);

  openDetail() {
    this.router.navigate(['../detail'], {
      relativeTo: this.activeRoute
    });
  }
}
