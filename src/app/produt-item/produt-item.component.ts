import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nga-produt-item',
  templateUrl: './produt-item.component.html',
  styleUrls: ['./produt-item.component.css']
})
export class ProdutItemComponent implements OnInit {
productId:string;
  constructor(route:ActivatedRoute) {
    this.productId=route.snapshot.paramMap.get('id')
   }

  ngOnInit() {
  }

}
