import { AppRolesService } from './../app-roles.service';
import { ChangeDetectorRef, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermissionsOnly], [appPermissionsExcept]'
})
export class AppPermissionsDirective implements OnInit {

  @Input() appPermissionsOnly: string | string[];
  @Input() appPermissionsOnlyThen: TemplateRef<any>;
  @Input() appermissionsOnlyElse: TemplateRef<any>;

  @Input() appPermissionsExcept: string | string[];
  @Input() appPermissionsExceptElse: TemplateRef<any>;
  @Input() appermissionsExceptThen: TemplateRef<any>;

  constructor(private viewContainer: ViewContainerRef, private changeDetector: ChangeDetectorRef,
    private templateRef: TemplateRef<any>, private role: AppRolesService) { }

  ngOnInit(): void {

  }

}
