import {ICustomerType} from './ICustomerType';

export interface ICustomer {
  id: number,
  name: string,
  idCard: string,
  dateOfBirth: string,
  address: string,
  phoneNumber: string,
  email: string,
  customerType: ICustomerType
}
