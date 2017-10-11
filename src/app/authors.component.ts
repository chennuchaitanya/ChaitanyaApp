
import {AuthorsService} from './authors.service';
import {Component} from '@angular/core';
@Component(
    {
        selector: 'authors',
        template: `
                    <h2>{{ title }}</h2>
                        <ul>
                            <li *ngFor="let author of listOfAuthors">
                                {{author}}
                            </li>
                        </ul>

        `

    }
)
export class AuthorsComponent{

    title;
    listOfAuthors;
    constructor(service: AuthorsService)
    {
        this.title = service.numberOfAuthors();
        this.listOfAuthors = service.getAuthors();

    }
}
