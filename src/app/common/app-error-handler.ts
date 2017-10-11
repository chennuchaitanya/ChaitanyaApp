import {ErrorHandler} from '@angular/core';

export class AppErrorHandler implements ErrorHandler
{
    handleError(error)
    {
        alert('This is a Global error. Something\'s wrong!');
    }
}
