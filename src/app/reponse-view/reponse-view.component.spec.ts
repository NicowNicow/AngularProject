import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseViewComponent } from './reponse-view.component';

describe('ReponseViewComponent', () => {
  let component: ReponseViewComponent;
  let fixture: ComponentFixture<ReponseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReponseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
