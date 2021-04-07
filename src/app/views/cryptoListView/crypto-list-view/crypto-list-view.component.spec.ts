import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoListViewComponent } from './crypto-list-view.component';

describe('CryptoListViewComponent', () => {
  let component: CryptoListViewComponent;
  let fixture: ComponentFixture<CryptoListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
