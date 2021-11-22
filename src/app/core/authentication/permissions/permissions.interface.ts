/** Router data role */


export interface PermissionsRouterData {
  only?: string | string[];
  except?: string | string[];
  redirectTo?: string;
  redirectFrom?: string;
}

export interface AppRole {
  name: string;
}
