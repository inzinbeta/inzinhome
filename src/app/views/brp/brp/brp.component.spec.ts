import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrpComponent } from './brp.component';

describe('BrpComponent', () => {
  let component: BrpComponent;
  let fixture: ComponentFixture<BrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
