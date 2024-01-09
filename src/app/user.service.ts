import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  role: string = 'ANONYMOUS';

  constructor() {}

  getUserRole(): string {
    return this.role;
  }

  login(withAdminRole: boolean) {
    this.role = withAdminRole ? 'ADMIN' : 'USER';
  }
}
