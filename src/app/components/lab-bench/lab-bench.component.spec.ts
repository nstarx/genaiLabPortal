import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabBenchComponent } from './lab-bench.component';

describe('LabBenchComponent', () => {
  let component: LabBenchComponent;
  let fixture: ComponentFixture<LabBenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabBenchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabBenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
