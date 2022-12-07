import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactFormPayload } from './home-contact.service';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss'],
})
export class HomeContactComponent {
  public isContactCreationSuccess = false;
  public isContactCreationFailed = false;

  public isFormInValidSubmitted: boolean;

  contactForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    messageText: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  public submit() {
    console.log(this.contactForm);

    if (this.contactForm.invalid) {
      this.isFormInValidSubmitted = true;
      return;
    }

    this.isContactCreationFailed = true;

    this.isFormInValidSubmitted = false;
    const payload: ContactFormPayload = {
      firstName: this.contactForm.controls.firstName.value,
      lastName: this.contactForm.controls.lastName.value,
      telephoneNumber: this.contactForm.controls.phoneNumber.value,
      email: this.contactForm.controls.email.value,
      textMessage: this.contactForm.controls.messageText.value,
    };
  }

  public closeSuccessAlert() {
    this.isContactCreationSuccess = false;
  }

  public closeFailedAlert() {
    this.isContactCreationFailed = false;
  }
}
