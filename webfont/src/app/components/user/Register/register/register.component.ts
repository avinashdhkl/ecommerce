import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/servies/user/user.service';
import {AlertifyService} from 'src/app/servies/alertify/alertify.service'
import { Router } from '@angular/router';
import { userModel } from './../../../../models/user/userModel';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registrationForm !: FormGroup
submitted !: boolean ;
  user!: userModel;
Router : any


  constructor(private fb : FormBuilder, private addUserServices: UserService,private alertify:AlertifyService,private router:Router) { }

  ngOnInit() {

    this.createRegistrationForm();

  }
  createRegistrationForm(){
    this.registrationForm = this.fb.group(
      {
        firstname:['' ,Validators.required],
        lastname:['',Validators.required],
        username :['',[Validators.required,]],
        email :['',[Validators.required,Validators.email]],
        phonenumber :['',[Validators.required,Validators.maxLength(10)]],
        dob :['',Validators.required],
        password :['',[Validators.required,Validators.minLength(6)]],
        confirmpassword :['',Validators.required],
        gender :[''],
        image:['']
      }
      ,{
        Validators: this.passwordMatchinValidators

      }





    )

  }



  passwordMatchinValidators(fg:FormGroup) : Validators {
    return fg.get('password')?.value === fg.get('confirmpassword')?.value
    ? {NotMatch:false}
    :{NotMatch:true};
  }





  onSubmit(){
    console.log(this.registrationForm)
      console.log('Form status',this.registrationForm.valid)
      this.submitted = true

    if(this.registrationForm.valid){

      // this.user = Object.assign(this.user,this.registrationForm.value);
      this.addUserServices.addUser(this.userData());
      this.registrationForm.reset();
      this.submitted=false;

      this.alertify.success('Registration Successful')
      this.router.navigate(['/user/login'])

    }
    else{
      this.alertify.error('Something is Wrong');
    }

  }



userData():userModel{
  return this.user ={
   firstname : this.firstname.value,
   lastname : this.lastname.value,
    username:this.username.value,
    email:this.email.value,
    phonenumber:this.phonenumber.value,
    password :this.password.value,
    confirmpassword : this.confirmpassword.value,
    image:this.image.value,
    gender:this.gender.value,

  }

}



  get firstname(){
    return this.registrationForm.get('firstname') as FormControl
  }
  get lastname(){
    return this.registrationForm.get('lastname') as FormControl
  }
  get email(){
    return this.registrationForm.get('email') as FormControl
  }
  get username(){
    return this.registrationForm.get('username') as FormControl
  }
  get password(){
    return this.registrationForm.get('password') as FormControl
  }
  get confirmpassword(){
    return this.registrationForm.get('confirmpassword') as FormControl
  }
  get phonenumber(){
    return this.registrationForm.get('phonenumber') as FormControl
  }
  get gender(){
    return this.registrationForm.get('gender') as FormControl
  }
  get image(){
    return this.registrationForm.get('image') as FormControl
  }

}
