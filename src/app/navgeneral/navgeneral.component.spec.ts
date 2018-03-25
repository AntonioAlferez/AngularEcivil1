import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgeneralComponent } from './navgeneral.component';

describe('NavgeneralComponent', () => {
  let component: NavgeneralComponent;
  let fixture: ComponentFixture<NavgeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavgeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
