import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRedirectionComponent } from './post-redirection.component';

describe('PostRedirectionComponent', () => {
  let component: PostRedirectionComponent;
  let fixture: ComponentFixture<PostRedirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRedirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
