import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ProductTable',
  templateUrl: './ProductTable.component.html',
  styleUrls: ['./ProductTable.component.css']
})
export class ProductTableComponent implements OnInit {
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

  constructor() { }

  ngOnInit() {
  }

}
