import { AppRolesService } from './../app-roles.service';
import { ChangeDetectorRef, Directive, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { from, merge, Subscription } from 'rxjs';
import { skip, take } from 'rxjs/operators';
import { isBoolean, notEmptyValue } from 'src/app/core/utils/helpers';


@Directive({
  selector: '[appPermissionsOnly], [appPermissionsExcept], appPermissionsOnly'
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


  private initPermissionSubscription: Subscription;
  // Pular a varredura do onchange
  private firstMergeUnusedRun = 1;
  private currentAuthorizedState: boolean;

  constructor(private viewContainer: ViewContainerRef, private changeDetector: ChangeDetectorRef,
    private rolesService: AppRolesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const onlyChanges = changes.appPermissionsOnly;
    const exceptChanges = changes.appPermissionsExcept;
    if (onlyChanges || exceptChanges) {
      if (onlyChanges && onlyChanges.firstChange) {
        return;
      }
      if (exceptChanges && exceptChanges.firstChange) {
        return;
      }
      merge(this.rolesService.roles$)
        .pipe(skip(this.firstMergeUnusedRun), take(1))
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
  }

  ngOnInit(): void {
    this.initPermissionSubscription = this.validateExceptOnlyPermissions();
  }

  ngOnDestroy(): void {
    if (this.initPermissionSubscription) {
      this.initPermissionSubscription.unsubscribe();
    }
  }


  /** Primeira carredura */
  private validateExceptOnlyPermissions(): Subscription {
    console.log("aqui cali")
    return merge(this.rolesService.roles$)
      .pipe()
      .subscribe(() => {
        console.log("subscribe " + this.appPermissionsOnly)
        if (notEmptyValue(this.appPermissionsExcept)) {
          this.validateExceptAndOnlyPermissions();
          return;
        }

        if (notEmptyValue(this.appPermissionsOnly)) {
          console.log("appPermissionsOnly " + this.appPermissionsOnly)
          this.validateOnlyPermissions();
          return;
        }
        this.handleAuthorisedPermission(this.getAuthorisedTemplates());
      });
  }
  /** Consulta as roles de permitidos */
  private validateOnlyPermissions(): void {
    console.log("validateOnlyPermissions ")
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
  /** Consulta as roles dos exceto */
  private validateExceptAndOnlyPermissions(): void {
    console.log("validateExceptAndOnlyPermissions ")

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
    console.log("handleAuthorisedPermission " + this.appPermissionsExcept + " " + this.appPermissionsOnly)

    if (isBoolean(this.currentAuthorizedState) && this.currentAuthorizedState) {
      return;
    }
    this.currentAuthorizedState = true;
    this.showTemplateBlockInView(template);
  }

  /** Nao autorizado */
  private handleUnauthorisedPermission(template: TemplateRef<any>): void {
    console.log("handleUnauthorisedPermission " + this.appPermissionsExcept + " " + this.appPermissionsOnly)

    if (isBoolean(this.currentAuthorizedState) && !this.currentAuthorizedState) {
      return;
    }
    this.currentAuthorizedState = false;
    this.showTemplateBlockInView(template);
  }

  /** mostrar ou esconder template */
  private showTemplateBlockInView(template: TemplateRef<any>): void {
    console.log("showTemplateBlockInView " + this.appPermissionsExcept + " " + this.appPermissionsOnly)

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
