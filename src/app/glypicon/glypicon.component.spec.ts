import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlypiconComponent } from './glypicon.component';

describe('GlypiconComponent', () => {
  let component: GlypiconComponent;
  let fixture: ComponentFixture<GlypiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlypiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlypiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
