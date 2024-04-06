import { TestBed } from '@angular/core/testing'
import { RouterOutlet } from '@angular/router'
import { AppComponent } from './app.component'
import { AsyncComponent } from './src/components/async-component/async.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterOutlet, AsyncComponent],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

})
