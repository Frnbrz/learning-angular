import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SocialMediaComponent } from './components/social-media/social-media.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { WelcomeComponent } from './components/welcome/welcome.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, ToolbarComponent, SocialMediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frnbrz-angular-learn';
}
