import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdoItemComponent } from './ido-item.component';

describe('IdoItemComponent', () => {
  let component: IdoItemComponent;
  let fixture: ComponentFixture<IdoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
