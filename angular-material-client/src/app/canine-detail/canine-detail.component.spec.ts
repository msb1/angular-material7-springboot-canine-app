import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanineDetailComponent } from './canine-detail.component';

describe('CanineEditComponent', () => {
  let component: CanineDetailComponent;
  let fixture: ComponentFixture<CanineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
