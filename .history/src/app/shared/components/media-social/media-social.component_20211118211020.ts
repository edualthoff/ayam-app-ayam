import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

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
    {name: 'instagram', color: 'unset', square: false },

  ]
  @ViewChild('facebook')
  facebook: TemplateRef<any>;
  @ViewChild('instagram')
  instagram: TemplateRef<any>;
  @ViewChild('whatsapp')
  whatsapp: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
    if(this.options == null) {
      this.options = this.optionsDefault;
    }
  }

}


export interface Options {
  name?: string;
  url?: string;
  color?: string;
  square?: boolean;
}

export interface IconOptions {

}
