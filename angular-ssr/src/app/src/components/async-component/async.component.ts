import { AsyncPipe, JsonPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { EndpointSimulationService } from '../../services/endpoint-simulation.service'


@Component({
  selector: 'app-async',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './async.component.html',
  styleUrl: './async.component.scss'
})
export class AsyncComponent {
  endpointSimulationService = inject(EndpointSimulationService)
  data$: Observable<any> = this.endpointSimulationService.hitEndpoint()

  constructor() {

  }
}
