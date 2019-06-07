import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutItemComponent } from './produt-item.component';

describe('ProdutItemComponent', () => {
  let component: ProdutItemComponent;
  let fixture: ComponentFixture<ProdutItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
