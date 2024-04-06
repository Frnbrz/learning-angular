import { Component, Input } from '@angular/core'
import { MainContainerComponent } from '../layout'
import { SocialMediaElement } from './models'
import { SocialMediaElementComponent } from './social-media-element/social-media-element.component'

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [SocialMediaElementComponent, MainContainerComponent],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  @Input() socialMediaList: SocialMediaElement[] = [
    {
      name: 'Twitch',
      link: 'https://www.twitch.tv',
      imgPath: 'assets/images/social-media/twitch.svg',
    },
    {
      name: 'Youtube',
      link: 'https://www.youtube.com',
      imgPath: 'assets/images/social-media/youtube.svg',
    },
    {
      name: 'Discord',
      link: 'https://discord.gg',
      imgPath: 'assets/images/social-media/discord.svg',
    },
    {
      name: 'X',
      link: 'https://twitter.com',
      imgPath: 'assets/images/social-media/twitter.svg',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com',
      imgPath: 'assets/images/social-media/instagram.svg',
    },
    {
      name: 'Tiktok',
      link: 'https://www.tiktok.com',
      imgPath: 'assets/images/social-media/tiktok.svg',
    },
  ];
}
