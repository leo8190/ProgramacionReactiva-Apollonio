import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEstudiantesPromiseComponent } from './tabla-estudiantes-promise.component';

describe('TablaEstudiantesPromiseComponent', () => {
  let component: TablaEstudiantesPromiseComponent;
  let fixture: ComponentFixture<TablaEstudiantesPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEstudiantesPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEstudiantesPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
