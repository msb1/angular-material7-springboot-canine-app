import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanineListComponent } from './canine-list.component';

describe('CanineListComponent', () => {
  let component: CanineListComponent;
  let fixture: ComponentFixture<CanineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
