import {Component, inject, OnInit} from '@angular/core';
import {RehabProgramComponentsService} from "../../../services/rehab-program-components.service";

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.css']
})
export class ProtocolComponent implements OnInit {

  private rehabProgramComponentService: RehabProgramComponentsService = inject(RehabProgramComponentsService);


  ngOnInit(): void {
    // this.rehabProgramComponentService.getRehabProgram().subscribe(
    //   rp => console.log(rp)
    // );
  }



}
