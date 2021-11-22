export function capitalize(text: string) {
  return text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase();
}

export function now() {
  return new Date().getTime();
}

export function nowTimestampSecond() {
  return Math.round(new Date().getTime()/1000);
}

export function timeLeft(expiredAt: number) {
  return Math.max(0, expiredAt - now());
}

export function isString(value: any): value is string {
  return !!value && typeof value === 'string';
}

export function transformStringToArray(value: string | string[]): string[] {
  if (isString(value)) {
      return [value];
  }
  return value;
}

export function notEmptyValue(value: string | string[]): boolean {
  if (Array.isArray(value)) {
      return value.length > 0;
  }
  return !!value;
}

export function notUndefined(value: any): boolean {
  if(value !== undefined) {
    return true;
  }
  return false;
}
