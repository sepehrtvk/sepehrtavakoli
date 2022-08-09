import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSkillComponent } from './big-skill.component';

describe('BigSkillComponent', () => {
  let component: BigSkillComponent;
  let fixture: ComponentFixture<BigSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
