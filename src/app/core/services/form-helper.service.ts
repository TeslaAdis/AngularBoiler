import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class FormHelperService {


    errors: any = {
        min: '{{controlName}} should be at grather than {{min}}',
        max: '{{controlName}} should be less than {{max}}',
        required: '{{controlName}} is required',
        requiredTrue: 'Please check {{controlName}}',
        email: 'Please enter valid email',
        minlength: '{{controlName}} should be at least {{requiredLength}} chars',
        maxlength: '{{controlName}} can not exceed more than {{requiredLength}}',
        pattern: 'Please enter valid {{controlName}}'
    };

    constructor() {
    }

    public isInvalid(fg: FormGroup, fcName: string, submited: boolean): boolean {
        const fc = fg.get(fcName);
        return (submited || fc.touched) && fc.invalid;
    }

    public getError(fg: FormGroup, fcName: string, displayName?: string): string {
        const fc = fg.get(fcName);
        if (fc.errors && this.errors[Object.keys(fc.errors)[0]]) {
            const errorType: string = Object.keys(fc.errors)[0];
            let errorMsg = this.errors[errorType].replace(/{{controlName}}/g, displayName || '');

            if (errorType === 'min') {
                errorMsg = errorMsg.replace(/{{min}}/g, fc.errors[errorType].min);
            } else if (errorType === 'max') {
                errorMsg = errorMsg.replace(/{{max}}/g, fc.errors[errorType].max);
            } else if (errorType === 'minlength' || errorType === 'maxlength') {
                errorMsg = errorMsg.replace(/{{requiredLength}}/g, fc.errors[errorType].requiredLength);
            }
            return errorMsg;
        }
    }

}
