/**
 * Session storage for saving cart and customer information.
 *
 * @author Dylan Skokan, Isaiah Cuellar, Tom Waterman, Justin Pham, Kyle McClernon
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  private sessionStorage: Storage = window.sessionStorage;

  setItem(key: string, value: any) {
    this.sessionStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const value = this.sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  removeItem(key: string) {
    this.sessionStorage.removeItem(key);
  }
}