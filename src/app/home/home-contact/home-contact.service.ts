import { Injectable } from '@angular/core';

export interface ContactFormPayload {
  firstName: string | null;
  lastName: string | null;
  telephoneNumber: string | null;
  email: string | null;
  textMessage: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class HomeContactService {
  constructor() {}
}
