import { ChangeDetectorRef, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermissionsOnly], [appPermissions]'
})
export class AppPermissionsDirective {

  @Input() ngxPermissionsOnly: string | string[];
  @Input() ngxPermissionsOnlyThen: TemplateRef<any>;
  @Input() ngxPermissionsOnlyElse: TemplateRef<any>;

  constructor(private viewContainer: ViewContainerRef, private changeDetector: ChangeDetectorRef, private templateRef: TemplateRef<any>) { }

}
