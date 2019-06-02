import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRoomDialogComponent } from './assign-room-dialog.component';

describe('AssignRoomDialogComponent', () => {
  let component: AssignRoomDialogComponent;
  let fixture: ComponentFixture<AssignRoomDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignRoomDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignRoomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
