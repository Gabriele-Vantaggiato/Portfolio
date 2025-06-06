import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsCategoryComponent } from './certifications-category.component';

describe('CertificationsCategoryComponent', () => {
  let component: CertificationsCategoryComponent;
  let fixture: ComponentFixture<CertificationsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationsCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
