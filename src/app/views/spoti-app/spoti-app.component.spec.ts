import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotiAppComponent } from './spoti-app.component';

describe('SpotiAppComponent', () => {
  let component: SpotiAppComponent;
  let fixture: ComponentFixture<SpotiAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotiAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotiAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
