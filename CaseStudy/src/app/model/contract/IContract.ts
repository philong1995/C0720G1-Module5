import {IEmployee} from '../employee/IEmployee';
import {ICustomer} from '../customer/ICustomer';
import {IService} from '../service/IService';

export interface IContract {
  id: number;
  startDay: string;
  endDay: string;
  deposit: number;
  totalMoney: number;
  employee: IEmployee;
  customer: ICustomer;
  service: IService;
}
