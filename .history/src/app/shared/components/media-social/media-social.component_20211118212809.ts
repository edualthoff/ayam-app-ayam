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
    {name: 'facebook', url:'', color: 'unset', square: false },
    {name: 'instagram', url:'', color: 'unset', square: false },
    {name: 'whatsapp', url:'', color: 'unset', square: false}
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
    } else {
      this.options.map(x => {
        this.implementsSocial(x.name, x);
      })
    }
  }

  private implementsSocial(value: string, media: Object) {
    switch (value) {
      case 'facebook':
        return Object.assign(media, this.optionsDefault[0]);
      case 'instagram':
        return Object.assign(media, this.optionsDefault[1]);
      case 'whatsapp':
        return Object.assign(media, this.optionsDefault[2]);
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
