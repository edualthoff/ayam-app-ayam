import { merge } from 'jquery';
import { AppRolesService } from './../app-roles.service';
import { ChangeDetectorRef, Directive, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { notEmptyValue } from 'src/app/core/utils/helpers';
import { isBoolean } from 'util';
import { EventEmitter } from 'stream';

export const appPermissionsPredefinedStrategies = {
  REMOVE: 'remove',
  SHOW: 'show'
};

@Directive({
  selector: '[appPermissionsOnly], [appPermissionsExcept]'
})
export class AppPermissionsDirective implements OnInit, OnChanges {

  @Input() appPermissionsOnly: string | string[];
  @Input() appPermissionsOnlyThen: TemplateRef<any>;
  @Input() appPermissionsOnlyElse: TemplateRef<any>;

  @Input() appPermissionsExcept: string | string[];
  @Input() appPermissionsExceptElse: TemplateRef<any>;
  @Input() appPermissionsExceptThen: TemplateRef<any>;


  @Input() appPermissionsThen: TemplateRef<any>;
  @Input() appPermissionsElse: TemplateRef<any>;

  @Output() permissionsAuthorized = new EventEmitter();
  @Output() permissionsUnauthorized = new EventEmitter()

  private initPermissionSubscription: Subscription;
  // skip first run cause merge will fire twice
  private firstMergeUnusedRun = 1;
  private currentAuthorizedState: boolean;

  constructor(private viewContainer: ViewContainerRef, private changeDetector: ChangeDetectorRef,
    private templateRef: TemplateRef<any>, private rolesService: AppRolesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const onlyChanges = changes.appPermissionsOnly;
    const exceptChanges = changes.appPermissionsExcept;

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
    Promise.resolve(this.rolesService.hasOnlyRoles(this.appPermissionsOnly))
    .then((hasRoles) => {
        if (hasRoles) {
          this.handleAuthorisedPermission(this.appPermissionsOnlyThen || this.appPermissionsThen || this.templateRef);
        } else {
          this.handleUnauthorisedPermission(this.appPermissionsOnlyElse || this.appPermissionsElse);
        }
      })
      .catch(() => {
        this.handleUnauthorisedPermission(this.appPermissionsOnlyElse || this.appPermissionsElse);
      });
  }

  private validateExceptAndOnlyPermissions(): void {
    Promise
      .resolve(this.rolesService.hasOnlyRoles(this.appPermissionsExcept))
      .then((hasRole) => {
        if (hasRole) {
          this.handleUnauthorisedPermission(this.appPermissionsExceptElse || this.appPermissionsElse);
          return;
        }

        if (!!this.appPermissionsOnly) {
          throw false;
        }

        this.handleAuthorisedPermission(this.appPermissionsExceptThen || this.appPermissionsThen || this.templateRef);
      })
      .catch(() => {
        if (!!this.appPermissionsOnly) {
          this.validateOnlyPermissions();
        } else {
          this.handleAuthorisedPermission(this.appPermissionsExceptThen || this.appPermissionsThen || this.templateRef);
        }
      });
  }

  /** Autorizado */
  private handleAuthorisedPermission(template: TemplateRef<any>): void {
    if (isBoolean(this.currentAuthorizedState) && this.currentAuthorizedState) {
        return;
    }
    this.currentAuthorizedState = true;
    this.showTemplateBlockInView(template);
}

  /** Nao autorizado */
  private handleUnauthorisedPermission(template: TemplateRef<any>): void {
    if (isBoolean(this.currentAuthorizedState) && !this.currentAuthorizedState) {
        return;
    }
    this.currentAuthorizedState = false;
    this.showTemplateBlockInView(template);
  }

  /** mostrar ou esconder template */
  private showTemplateBlockInView(template: TemplateRef<any>): void {
    this.viewContainer.clear();
    if (!template) {
        return;
    }
    this.viewContainer.createEmbeddedView(template);
    this.changeDetector.markForCheck();
  }

  private getAuthorisedTemplates(): TemplateRef<any> {
    return this.appPermissionsOnlyThen
        || this.appPermissionsExceptThen
        || this.appPermissionsThen
        || this.templateRef;
  }
}