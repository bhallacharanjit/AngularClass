import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondPageComponent } from './my-second-page.component';

describe('MySecondPageComponent', () => {
  let component: MySecondPageComponent;
  let fixture: ComponentFixture<MySecondPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySecondPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
