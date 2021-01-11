import { Component, OnInit } from '@angular/core';
import {IService} from '../../../model/service/IService';
import {ServiceService} from '../../../service/service/service.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent implements OnInit {

  public serviceList: IService[];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((data: IService[]) => {
      this.serviceList = data;
    }, error => console.log(error));
  }

}
