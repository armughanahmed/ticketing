import { TestBed } from '@angular/core/testing';

import { CurrentUserResolver } from './current-user.resolver';

describe('CurrentUserResolverTsResolver', () => {
  let resolver: CurrentUserResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CurrentUserResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
