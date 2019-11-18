import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrireReponseComponent } from './ecrire-reponse.component';

describe('EcrireReponseComponent', () => {
  let component: EcrireReponseComponent;
  let fixture: ComponentFixture<EcrireReponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcrireReponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcrireReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
