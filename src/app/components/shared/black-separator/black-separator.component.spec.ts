import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackSeparatorComponent } from './black-separator.component';

describe('BlackSeparatorComponent', () => {
  let component: BlackSeparatorComponent;
  let fixture: ComponentFixture<BlackSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackSeparatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
