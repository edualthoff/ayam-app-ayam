import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private screenOrientation: ScreenOrientation;

  constructor() {
    this.blockRotationView();
  }


  private blockRotationView() {
    // get current
    console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'
    // set to PORTRAIT
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    // allow user rotate
    this.screenOrientation.unlock();
    // detect orientation changes
    this.screenOrientation.onChange().subscribe(
      () => {
        console.log("Orientation Changed");
      }
    );
  }
}
