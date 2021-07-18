import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/Operators';
import { productModel, updateProductModel } from 'src/app/models/product/productmodel';
import { ProductService } from 'src/app/servies/product/product.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductresolverService implements Resolve<updateProductModel| undefined|null>{

  constructor(private productservice: ProductService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<updateProductModel| undefined|null>|updateProductModel{
      const productId = route.params.id;
      return this.productservice.removeProduct(+productId).pipe(
          catchError(error => {
              this.router.navigate(['/']);
              return of(null);

          })
      );
  }

}
