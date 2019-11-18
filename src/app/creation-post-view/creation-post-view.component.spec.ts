import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationPostViewComponent } from './creation-post-view.component';

describe('CreationPostViewComponent', () => {
  let component: CreationPostViewComponent;
  let fixture: ComponentFixture<CreationPostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationPostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationPostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
