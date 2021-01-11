import {ICustomer} from './ICustomer';

export interface IBook {
  id: number,
  startDate: string,
  startTime: string,
  exp: string,
  money: number,
  xMoney: string,
  bonus: string,
  customer: ICustomer,
}
