import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';


export function valueMatch(compareTo: string | (string | number)[]): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
        if (!c.parent) { return null; }
        if (c.value !== c.parent.get(compareTo).value) {
            return { valueMatch: true };
        }
        return null;
    };
}
