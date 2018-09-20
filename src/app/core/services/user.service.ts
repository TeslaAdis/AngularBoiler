import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

    user: {
        firstName: string;
        lastName: string;
        email: string;
        image: string;
    };
    isLogged: boolean;

    constructor(private router: Router) {
        // Load user state
        this.initiateUserState();
    }


    private initiateUserState(): void {
        // Load user from storage;
        this.user = {
            firstName: 'Adis',
            lastName: 'Talic',
            email: 'adis_talic@live.com',
            image: 'https://media.licdn.com/dms/image/C5103AQF7iRA75YrHDQ/profile-displayphoto-shrink_100_100/0?e=1542844800&v=beta&t=E3qCiUUKPVp7DS7UFWgpPgg-J4h50itH-Ki7k47zDJo'
        };
        this.isLogged = true;
    }
    public logout(): void {
        this.router.navigate(['/']);
        this.user = null;
        this.isLogged = false;
    }
}
