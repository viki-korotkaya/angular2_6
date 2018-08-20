//Создание компонента
// Директива import - импортирует функциональность модуля angular/core
import { Component } from '@angular/core';
// функция-декоратор @Component - ассоциирует метаданные с кдассом компонента AppComponent
@Component({
    //selector - селектор css
    // template - шаблон Html
    selector: 'my-app',
    template: `<div>
        <h1>Router in Angular 6</h1>
        <router-outlet></router-outlet>
    </div>`
})
//export - give posibility to use this class in another modules
export class AppComponent {


}