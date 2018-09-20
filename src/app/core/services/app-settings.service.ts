import { Injectable } from '@angular/core';

@Injectable()
export class AppSettingsService {

    public appName: String;
    public appIcon: String;

    constructor() {
        this.appName = 'Angular App';
        this.appIcon = '../assets/img/angular-icon.png';
    }

}
