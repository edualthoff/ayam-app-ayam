import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private screenOrientation: ScreenOrientation) { }


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
