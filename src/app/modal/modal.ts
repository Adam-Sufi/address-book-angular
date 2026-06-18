import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  DxTextBoxModule,
  DxTextAreaModule,
  DxSelectBoxModule,
  DxButtonModule
} from 'devextreme-angular';

import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxButtonModule
  ],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal implements OnChanges {

  @Input() contact!: Contact;

  @Input() stateList: string[] = [];

  @Input() isNewRecord = true;

  @Output() save = new EventEmitter<Contact>();

  @Output() close = new EventEmitter<void>();

  isEditMode = false;

  ngOnChanges(changes: SimpleChanges): void {

    this.isEditMode = false;

  }

  onSave() {
    this.save.emit(this.contact);
  }

  editRecord() {
    this.isEditMode = true;
  }

  saveRecord() {
    this.save.emit(this.contact);
  }

  isEmailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      this.contact.email
    );
  }

  isPhoneValid(): boolean {
    return /^[0-9]{10,11}$/.test(
      this.contact.phone
    );
  }

  isPostcodeValid(): boolean {
    return /^[0-9]{5}$/.test(
      this.contact.postcode
    );
  }

  isFormValid(): boolean {

    return (
      this.contact.name.trim() !== '' &&
      this.isEmailValid() &&
      this.isPhoneValid() &&
      this.isPostcodeValid()
    );
  }

  cancel() {

    this.isEditMode = false;

    this.close.emit();
  }
}