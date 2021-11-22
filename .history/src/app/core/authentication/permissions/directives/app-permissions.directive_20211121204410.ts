import { merge } from 'jquery';
import { AppRolesService } from './../app-roles.service';
import { ChangeDetectorRef, Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { notEmptyValue } from 'src/app/core/utils/helpers';

@Directive({
  selector: '[appPermissionsOnly], [appPermissionsExcept]'
})
export class AppPermissionsDirective implements OnInit, OnChanges {

  @Input() appPermissionsOnly: string | string[];
  @Input() appPermissionsOnlyThen: TemplateRef<any>;
  @Input() appermissionsOnlyElse: TemplateRef<any>;

  @Input() appPermissionsExcept: string | string[];
  @Input() appPermissionsExceptElse: TemplateRef<any>;
  @Input() appermissionsExceptThen: TemplateRef<any>;

  private initPermissionSubscription: Subscription;
  // skip first run cause merge will fire twice
  private firstMergeUnusedRun = 1;

  constructor(private viewContainer: ViewContainerRef, private changeDetector: ChangeDetectorRef,
    private templateRef: TemplateRef<any>, private rolesService: AppRolesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const onlyChanges = changes.ngxPermissionsOnly;
    const exceptChanges = changes.ngxPermissionsExcept;

  }

  ngOnInit(): void {
    this.initPermissionSubscription = this.validateExceptOnlyPermissions();
  }

  ngOnDestroy(): void {
    if (this.initPermissionSubscription) {
      this.initPermissionSubscription.unsubscribe();
    }
  }


  private validateExceptOnlyPermissions(): Subscription {
    return from(this.rolesService.roles$)
      .pipe(skip(this.firstMergeUnusedRun))
      .subscribe(() => {
        if (notEmptyValue(this.appPermissionsExcept)) {
          this.validateExceptAndOnlyPermissions();
          return;
        }

        if (notEmptyValue(this.appPermissionsOnly)) {
          this.validateOnlyPermissions();
          return;
        }
        this.handleAuthorisedPermission(this.getAuthorisedTemplates());
      });
  }

  private validateOnlyPermissions(): void {

  }
  private validateExceptAndOnlyPermissions(): void {

  }
}
