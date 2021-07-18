import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { productModel } from 'src/app/models/product/productmodel';
import { Observable, of } from 'rxjs';
import { ProductService } from 'src/app/servies/product/product.service';
import { catchError } from 'rxjs/Operators';

@Injectable({
    providedIn: 'root'
})
export class ProductdetailsresolverService implements Resolve<productModel| undefined|null> {

    constructor(private productservice: ProductService, private router: Router) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<productModel| undefined|null>|productModel{
        const productId = route.params.id;
        return this.productservice.fetchProductDetails(+productId).pipe(
            catchError(error => {
                this.router.navigate(['/']);
                return of(null);

            })
        );
    }

}
