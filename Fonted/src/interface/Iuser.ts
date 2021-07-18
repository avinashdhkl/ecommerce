export interface Iuser {
    firstname: String;
    lastname: string;
    username: string;
    email: string;
    phonenumber: string;
    image: string;
    gender: string;
    password: string;
    confirmpassword: string;
}
export interface IUserLogin{
  username: string|undefined;
  password: string|undefined;
  token:string|undefined;

}
