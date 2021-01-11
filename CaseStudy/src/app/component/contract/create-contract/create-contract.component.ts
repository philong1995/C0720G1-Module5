import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../../../model/customer/ICustomer';
import {IEmployee} from '../../../model/employee/IEmployee';
import {IService} from '../../../model/service/IService';
import {IAttachService} from '../../../model/service/IAttachService';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IContract} from '../../../model/contract/IContract';
import {ContractService} from '../../../service/contract/contract.service';
import {ContractDetailService} from '../../../service/contract/contract-detail.service';
import {CustomerService} from '../../../service/customer/customer.service';
import {EmployeeService} from '../../../service/employee/employee.service';
import {ServiceService} from '../../../service/service/service.service';
import {AttachServiceService} from '../../../service/service/attach-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent implements OnInit {

  public customerList: ICustomer[];

  public employeeList: IEmployee[];

  public serviceList: IService[];

  public attachServiceList: IAttachService[];

  public createFormContract: FormGroup;

  public totalMoneyTemp = 0;

  public moneyService = 0;

  public moneyAttachService = 0;

  public contract: IContract;


  constructor(private contractService: ContractService,
              private contractDetailService: ContractDetailService,
              private customerService: CustomerService,
              private employeeService: EmployeeService,
              private attachServiceDao: AttachServiceService,
              private serviceDao: ServiceService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllEmployee();
    this.getAllService();
    this.getAllAttachService();

    this.createFormContract = this.fb.group({
      customer: ['', [Validators.required]],
      employee: ['', [Validators.required]],
      service: ['', [Validators.required]],
      startDay: ['', Validators.required],
      endDay: ['', [Validators.required]],
      deposit: [0, Validators.required],
      totalMoney: [0, Validators.required]
    })
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe((data: ICustomer[]) => {
      this.customerList = data;
    }, error => console.log(error));
  }

  getAllEmployee() {
    this.employeeService.getAll().subscribe((data: IEmployee[]) => {
      this.employeeList = data;
    }, error => console.log(error));
  }

  getAllService() {
    this.serviceDao.getAll().subscribe((data: IService[]) => {
      this.serviceList = data;
    }, error => console.log(error));
  }

  getAllAttachService() {
    this.attachServiceDao.getAll().subscribe((data: IAttachService[]) => {
      this.attachServiceList = data;

      for (let i in this.attachServiceList) {
        this.attachServiceList[i].amount = 0;
      }

    }, error => console.log(error));
  }


  moneyByService() {
    this.moneyService = 0;

    if (this.createFormContract.value.service !== '' && this.createFormContract.value.endDay !== '' && this.createFormContract.value.startDay !== '') {
      this.serviceDao.getById(this.createFormContract.value.service).subscribe((data: IService) => {

        let difference = dateDiff(parseDate(this.createFormContract.value.startDay), parseDate(this.createFormContract.value.endDay));
        this.moneyService = data.cost * difference;

        this.totalMoneyTemp = this.moneyService + this.moneyAttachService;

        console.log(this.totalMoneyTemp);
      });
    }
  }


  moneyByAttachService(i: number, amount: number) {
    this.moneyAttachService = 0;

    this.attachServiceList[i].amount = amount;

    for (let e of this.attachServiceList) {
      this.moneyAttachService = this.moneyAttachService + (e.cost * e.amount);
    }

    this.totalMoneyTemp = this.moneyService + this.moneyAttachService;
    console.log(this.totalMoneyTemp);

  }

  create() {

    console.log(this.createFormContract);

    if (this.createFormContract.invalid) {
      return;
    }

    for (let e of this.customerList) {
      if (e.id == this.createFormContract.value.customer) {
        this.createFormContract.value.customer = e;
      }
    }

    for (let e of this.employeeList) {
      if (e.id == this.createFormContract.value.employee) {
        this.createFormContract.value.employee = e;
      }
    }

    for (let e of this.serviceList) {
      if (e.id == this.createFormContract.value.service) {
        this.createFormContract.value.service = e;
      }
    }

    this.createFormContract.value.totalMoney = this.totalMoneyTemp;

    this.contractService.create(this.createFormContract.value).subscribe(data => {


        for (let e of this.attachServiceList) {
          if (e.amount > 0) {
            let contractDetail: { amount: number; attachService: IAttachService; contract: IContract } = {
              attachService: e,
              amount: e.amount,
              contract: data
            };

            this.contractDetailService.create(contractDetail).subscribe(data => {
              console.log(data);
            });

          }
        }


      }, error => console.log(error),
      () => {
        this.router.navigateByUrl('/contract').then(r => alert('Add new contract successfully.'))
      });


    console.log(this.createFormContract.value);

  }
}


function parseDate(str: string) {
  let dmy = str.split('-');
  return new Date(Number(dmy[0]), Number(dmy[1]) - 1, Number(dmy[2]));
}


function dateDiff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
