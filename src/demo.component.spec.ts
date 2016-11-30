import { By } from '@angular/platform-browser';
import { 
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

import { DemoComponent } from '../src/demo.component';

describe('TestBed DemoComponent Tests', () => {
  let fixture: ComponentFixture<DemoComponent>
    , instance: DemoComponent;

  beforeEach( async(() => {
    TestBed
      .configureTestingModule({
        declarations: [DemoComponent]
      })
      .compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(DemoComponent);
    instance = fixture.componentInstance;
  });

  it('should render h1', () => {
    const h2 = fixture.debugElement.query(By.css('h1'));
    expect(h2.nativeElement.textContent).toBe('This is a demo component');
  });

  it('should render paragraph', () => {
    const h2 = fixture.debugElement.query(By.css('p'));
    expect(h2.nativeElement.textContent).toBe(`It's been created using the ng2-librarization seed`);
  });
});