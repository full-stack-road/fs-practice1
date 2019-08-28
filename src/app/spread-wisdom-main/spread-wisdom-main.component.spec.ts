import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadWisdomMainComponent } from './spread-wisdom-main.component';

describe('SpreadWisdomMainComponent', () => {
  let component: SpreadWisdomMainComponent;
  let fixture: ComponentFixture<SpreadWisdomMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadWisdomMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadWisdomMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
