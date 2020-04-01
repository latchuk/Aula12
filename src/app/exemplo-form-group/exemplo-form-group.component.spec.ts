import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploFormGroupComponent } from './exemplo-form-group.component';

describe('ExemploFormGroupComponent', () => {
  let component: ExemploFormGroupComponent;
  let fixture: ComponentFixture<ExemploFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
