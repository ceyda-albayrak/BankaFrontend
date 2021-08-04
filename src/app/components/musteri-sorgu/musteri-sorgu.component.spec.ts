import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriSorguComponent } from './musteri-sorgu.component';

describe('MusteriSorguComponent', () => {
  let component: MusteriSorguComponent;
  let fixture: ComponentFixture<MusteriSorguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusteriSorguComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusteriSorguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
