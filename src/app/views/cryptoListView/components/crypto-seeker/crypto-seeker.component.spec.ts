import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoSeekerComponent } from './crypto-seeker.component';

describe('CryptoSeekerComponent', () => {
  let component: CryptoSeekerComponent;
  let fixture: ComponentFixture<CryptoSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoSeekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
