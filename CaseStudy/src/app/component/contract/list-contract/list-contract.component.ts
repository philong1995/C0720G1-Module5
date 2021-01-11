import { Component, OnInit } from '@angular/core';
import {IContract} from '../../../model/contract/IContract';
import {ContractService} from '../../../service/contract/contract.service';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.scss']
})
export class ListContractComponent implements OnInit {

  public contractList: IContract[];
  contractID: number;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {

    this.getAll();
  }

  getAll() {
    this.contractService.getAll().subscribe((data: IContract[]) => {
      this.contractList = data;
    }, error => console.log(error));
  }

  getId(id: number) {
    this.contractID = id;
  }

  delete() {
    this.contractService.delete(this.contractID).subscribe(data => {
      this.ngOnInit();
    });
  }

}
