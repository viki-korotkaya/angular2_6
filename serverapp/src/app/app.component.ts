//Создание компонента
// Директива import - импортирует функциональность модуля angular/core
import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {HttpService} from "./http.service";

// функция-декоратор @Component - ассоциирует метаданные с кдассом компонента AppComponent
@Component({
    //selector - селектор css
    // template - шаблон Html
    selector: 'my-app',
    template: `<div>
        <p>
            User name: {{user?.name}}
        </p>
        <p>
            User age: {{user?.age}}
        </p>
    </div>`,
    providers: [HttpService]
})
//export - give posibility to use this class in another modules
export class AppComponent implements OnInit{
    user: User;
    constructor(private httpService: HttpService){}

    ngOnInit(){
        this.httpService.getData().subscribe((data:User)=>this.user = data)
    }
}