import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialProblemsComponent } from './potential-problems.component';

describe('PotentialProblemsComponent', () => {
  let component: PotentialProblemsComponent;
  let fixture: ComponentFixture<PotentialProblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialProblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
