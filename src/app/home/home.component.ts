import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  suggestedProducts: SuggestedProduct[] = [
    {
      banerImage: 'Baner/baner1.jpg',
      category: {
        id: 1,
        category: 'electronics',
        subcategory: 'monitors',
      },
    },
    {
      banerImage: 'Baner/baner2.jpg',
      category: {
        id: 1,
        category: 'electronics',
        subcategory: 'VGAs',
      },
    },
    {
      banerImage: 'Baner/baner3.jpg',
      category: {
        id: 1,
        category: 'electronics',
        subcategory: 'cores',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}

}
