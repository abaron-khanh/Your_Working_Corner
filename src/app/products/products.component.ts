import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  view: 'grid' | 'list' = 'list';
  sortBy: 'default' | 'highToLow' | 'lowToHigh' = 'default';
  constructor() {}

  ngOnInit(): void {}

}
