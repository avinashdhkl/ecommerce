import { Iuser } from '../../../interface/Iuser';
export class userModel implements Iuser {
  firstname!: String;
  lastname!: string;
  username!: string;
  email!: string;
  phonenumber!: string;
  image!: string;
  gender!: string;
  password!: string;
  confirmpassword!: string;

}
