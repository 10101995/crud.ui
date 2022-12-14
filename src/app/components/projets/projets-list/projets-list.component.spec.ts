import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsListComponent } from './projets-list.component';

describe('ProjetsListComponent', () => {
  let component: ProjetsListComponent;
  let fixture: ComponentFixture<ProjetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
