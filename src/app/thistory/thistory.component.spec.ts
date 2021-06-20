import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThistoryComponent } from './thistory.component';

describe('ThistoryComponent', () => {
  let component: ThistoryComponent;
  let fixture: ComponentFixture<ThistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
