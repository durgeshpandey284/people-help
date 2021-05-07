import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import hospitalRecords from './share/records.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'people-help';

  public hosRecords = hospitalRecords;
  public closeResult: string | undefined;
  teamDetail: any = [];

  constructor(private modalService: NgbModal) { }
  // {
  //   hName: string,
  //   icuAvail: number,
  //   bedWithOxygenAvail: boolean,
  //   ventilatorsAvail: number,
  //   bipapAvail: number,
  //   hfnoAvail: number,
  //   teamDetail: string
  // } 

  open(content: any, data: any) {
    this.modalService.open(content, {
      centered: true,
      backdrop: 'static'
    });
    this.teamDetail = data;


  }
}
