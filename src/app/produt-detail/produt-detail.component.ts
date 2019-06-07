import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nga-produt-detail',
  templateUrl: './produt-detail.component.html',
  styleUrls: ['./produt-detail.component.css']
})
export class ProdutDetailComponent implements OnInit {
  productCategory: string;
  constructor(route: ActivatedRoute) {
  this.productCategory = route.snapshot.queryParamMap.get('category')}
  ngOnInit() {
  }

}
