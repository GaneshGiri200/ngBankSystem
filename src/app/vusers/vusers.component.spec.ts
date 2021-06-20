import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VusersComponent } from './vusers.component';

describe('VusersComponent', () => {
  let component: VusersComponent;
  let fixture: ComponentFixture<VusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
