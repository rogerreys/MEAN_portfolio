import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DimensionsService {

  constructor() { }
  getWidth() {
    return window.innerWidth;
  }
  getHeight() {
    return window.innerHeight;
  }
}
