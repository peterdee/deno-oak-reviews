import { Generic } from './Generic.interface.ts';

export interface User extends Generic {
  accountType: string;
  email: string;
  firstName: string;
  fullName: string;
  lastName: string;
};
