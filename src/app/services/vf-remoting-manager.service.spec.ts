import { TestBed } from '@angular/core/testing';

import { VfRemotingManagerService } from './vf-remoting-manager.service';

describe('VfRemotingManagerService', () => {
  let service: VfRemotingManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VfRemotingManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
