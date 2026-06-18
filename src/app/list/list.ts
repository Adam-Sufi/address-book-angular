import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DxDataGridModule,
  DxButtonModule,
  DxPopupModule
} from 'devextreme-angular';

import { AddressBookService } from '../services/address-book';
import { Contact } from '../models/contact.model';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule,
    DxPopupModule,
    Modal
  ],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List implements OnInit {

  contacts: Contact[] = [];

  popupVisible = false;

  isNewRecord = true;

  newContact: Contact = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    street: '',
    state: '',
    postcode: '',
    description: ''
  };

  constructor(
    public addressBookService: AddressBookService
  ) {}

  ngOnInit(): void {
    this.contacts = this.addressBookService.getContacts();
  }

  showAddPopup() {

    this.isNewRecord = true;

    this.newContact = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      street: '',
      state: '',
      postcode: '',
      description: ''
    };

    this.popupVisible = true;
  }

  onRowClick(e: any) {

    this.isNewRecord = false;

    this.newContact = {
      ...e.data
    };

    this.popupVisible = true;
  }

  saveContact(contact: Contact) {

    if (this.isNewRecord) {

      this.addressBookService.addContact(contact);

    } else {

      this.addressBookService.updateContact(contact);

    }

    this.contacts = this.addressBookService.getContacts();

    this.popupVisible = false;
  }

  onDeleteClick(e: any, id: number) {

  e.event.stopPropagation();

  this.deleteContact(id);

}

  deleteContact(id: number) {

    if (confirm('Delete this contact?')) {

      this.addressBookService.deleteContact(id);

      this.contacts =
        this.addressBookService.getContacts();
    }
  }
}