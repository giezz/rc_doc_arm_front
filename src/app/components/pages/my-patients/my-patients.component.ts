import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent implements OnInit, OnDestroy {

  ngOnInit() {
    console.log('MyPatientsComponent');
  }

  ngOnDestroy() {
    console.log('MyPatientsComponent destroyed');
  }
}
