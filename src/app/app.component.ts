import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'map';
  constructor(private swupdate: SwUpdate) {
    // checks if update available
    this.swupdate.available.subscribe((event: any) => {
      // reload / refresh the browser
      this.swupdate.activateUpdate().then(() => document.location.reload());
    });
  }
}
