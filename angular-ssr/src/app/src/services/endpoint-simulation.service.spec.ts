import { TestBed } from '@angular/core/testing'

import { HttpClientModule } from '@angular/common/http'
import { EndpointSimulationService } from './endpoint-simulation.service'

describe('EndpointSimulationService', () => {
  let service: EndpointSimulationService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EndpointSimulationService]
    })
    service = TestBed.inject(EndpointSimulationService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
