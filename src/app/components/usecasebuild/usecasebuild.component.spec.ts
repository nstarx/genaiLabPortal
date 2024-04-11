import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecasebuildComponent } from './usecasebuild.component';

describe('UsecasebuildComponent', () => {
  let component: UsecasebuildComponent;
  let fixture: ComponentFixture<UsecasebuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsecasebuildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsecasebuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
