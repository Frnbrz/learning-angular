import { Component, afterNextRender } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AsyncComponent } from './src/components/async-component/async.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    afterNextRender(() => {
      console.log("SSR WINDOW", window.location.pathname)
    })
  }
}
