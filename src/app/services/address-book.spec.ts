import { TestBed } from '@angular/core/testing';

import { AddressBook } from './address-book';

describe('AddressBook', () => {
  let service: AddressBook;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressBook);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
