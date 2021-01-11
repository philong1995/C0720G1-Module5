import {IAttachService} from '../service/IAttachService';
import {IContract} from './IContract';

export interface IContractDetail {
  id: number;
  attachService: IAttachService;
  amount: number;
  contract: IContract;
}
