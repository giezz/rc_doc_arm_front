import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private  activeIndexSubject = new BehaviorSubject<number>(0)
  activeIndex$ = this.activeIndexSubject.asObservable();


  setIndex(value: number) {
    this.activeIndexSubject.next(value)
  }

}
