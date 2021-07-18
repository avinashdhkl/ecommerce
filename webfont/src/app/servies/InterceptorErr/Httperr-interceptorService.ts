import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { of, throwError } from "rxjs";
import { catchError, concatMap, retryWhen } from "rxjs/Operators";
import { AlertifyService } from './../alertify/alertify.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor{
  constructor(private alertify:AlertifyService){}
  intercept(request:HttpRequest<any>,next:HttpHandler){
    console.log('Http Request has been started');
    return next.handle(request).pipe(
      retryWhen(error=>
        error.pipe(
          concatMap((checkErr:HttpErrorResponse,count:number)=>{
            if(checkErr.status===0 && count<=5){
              return of(checkErr);
            }
            return throwError(checkErr);

          })
        )
        ),
      catchError((error)=>{
        const errorMessage = this.setError(error);
        console.log(error);
        this.alertify.error(errorMessage);
        return throwError(errorMessage);


      })
    );
  }
  setError(error:HttpErrorResponse){
    let errorMessage = "Api is not response";
    if(error.error instanceof Error){
      errorMessage= error.error.message;
    }
    else{
      if(error.status !==0){
        errorMessage=error.error

      }
    }
    return errorMessage;
  }

}
