import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    image: string;
}

@Injectable()
export class UserService {

    user: User;
    isLogged: boolean;

    constructor(private router: Router) {
        // Load user state
        this.initiateUserState();
    }


    private initiateUserState(): void {
        // Load user from storage;
        this.user = null;
        this.isLogged = false;
        // this.runTest();
    }
    public logout(): void {
        this.router.navigate(['/']);
        this.user = null;
        this.isLogged = false;
    }

    public login(user: User): void {
        this.user = user;
        this.isLogged = true;
    }

    private runTest() {
        this.user = {
            firstName: 'Adis',
            lastName: 'Talic',
            email: 'adis_talic@live.com',
            image: 'https://media.licdn.com/dms/image/C5103AQF7iRA75YrHDQ/profile-displayphoto-shrink_100_100/0?e=1542844800&v=beta&t=E3qCiUUKPVp7DS7UFWgpPgg-J4h50itH-Ki7k47zDJo'
        };
        this.isLogged = true;
    }
}
