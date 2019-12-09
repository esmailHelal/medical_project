import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderandnavsideComponent } from './headerandnavside.component';

describe('HeaderandnavsideComponent', () => {
  let component: HeaderandnavsideComponent;
  let fixture: ComponentFixture<HeaderandnavsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderandnavsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderandnavsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
