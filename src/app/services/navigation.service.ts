import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private showElementSubject = new BehaviorSubject<boolean>(false);
  showElement$ = this.showElementSubject.asObservable();

  private  activeIndexSubject = new BehaviorSubject<number>(0)
  activeIndex$ = this.activeIndexSubject.asObservable();

  setShowElement(value: boolean) {
    this.showElementSubject.next(value);
  }

  setIndex(value: number) {
    this.activeIndexSubject.next(value)
  }

}
