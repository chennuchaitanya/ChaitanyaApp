import { AbstractControl, ValidationErrors } from '@angular/forms';


export class PasswordValidators{
    static oldPasswordMatch(control: AbstractControl): Promise<ValidationErrors|null>
    {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === '1234')
                    resolve(null);
                else resolve({oldPasswordMatch: true});
            }, 2000);
        });
    }

    static passwordMatch(control: AbstractControl): ValidationErrors|null
    {
        const newPassword = control.get('new-password');
        const confirmPassword = control.get('confirm-password');
        if (newPassword.value !== confirmPassword.value)
            return {passwordMatch: true};
        return null;
    }
}
