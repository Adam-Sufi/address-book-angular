import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  private contacts: Contact[] = [
    {
      id: 1,
      name: 'Adam',
      email: 'adam@gmail.com',
      phone: '0123456789',
      street: 'Jalan Mawar',
      state: 'Johor',
      postcode: '85000',
      description: 'Friend'
    }
  ];

  stateList: string[] = [
    'Johor',
    'Melaka',
    'Selangor',
    'Perak'
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact) {
    contact.id = Date.now();
    this.contacts.push(contact);
  }

  updateContact(updatedContact: Contact) {
    const index = this.contacts.findIndex(
      c => c.id === updatedContact.id
    );

    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter(
      contact => contact.id !== id
    );
  }
}