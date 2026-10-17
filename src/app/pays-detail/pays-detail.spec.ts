import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysDetail } from './pays-detail';

describe('PaysDetail', () => {
  let component: PaysDetail;
  let fixture: ComponentFixture<PaysDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaysDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(PaysDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
