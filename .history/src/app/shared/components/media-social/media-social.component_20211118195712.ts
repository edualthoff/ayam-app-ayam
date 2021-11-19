import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-social',
  templateUrl: './media-social.component.html',
  styleUrls: ['./media-social.component.scss'],
})
export class MediaSocialComponent implements OnInit {

  @Input()
  options: Options[] = null;

  private optionsDefault: Options[] = [
    {name: 'facebook', color: 'unset', square: false },
    {name: 'instagran', color: 'unset', square: false },
    {name: 'whatsapp', color: 'unset', square: false}

  ]
  constructor() { }

  ngOnInit() {
    if(this.options == null) {
      this.options = this.optionsDefault;
    }
  }

}


export interface Options {
  name?: string;
  color?: string;
  square?: boolean;
}

export interface IconOptions {

}
