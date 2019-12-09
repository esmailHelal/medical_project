import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckHeaderFooterService {
   visible:boolean=true;
  constructor() { }

  hideen(){

    this.visible=false;
  }
  show(){

    this.visible=true;
  }




}
