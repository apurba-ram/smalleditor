import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinieditorComponent } from './minieditor.component';

describe('MinieditorVcComponent', () => {
  let component: MinieditorComponent;
  let fixture: ComponentFixture<MinieditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinieditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinieditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
