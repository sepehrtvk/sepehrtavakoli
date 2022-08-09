import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSetComponent } from './icon-set.component';

describe('IconSetComponent', () => {
  let component: IconSetComponent;
  let fixture: ComponentFixture<IconSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
