import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdoSectionComponent } from './ido-section.component';

describe('IdoSectionComponent', () => {
  let component: IdoSectionComponent;
  let fixture: ComponentFixture<IdoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdoSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
