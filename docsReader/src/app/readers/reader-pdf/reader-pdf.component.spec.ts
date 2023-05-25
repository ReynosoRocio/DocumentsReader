import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderPDFComponent } from './reader-pdf.component';

describe('ReaderPDFComponent', () => {
  let component: ReaderPDFComponent;
  let fixture: ComponentFixture<ReaderPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderPDFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
