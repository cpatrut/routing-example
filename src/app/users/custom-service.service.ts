import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class CustomServiceService {
  userActivated=new Subject();

  constructor() { }

}
