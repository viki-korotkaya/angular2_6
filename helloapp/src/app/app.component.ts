//Создание компонента
// Директива import - импортирует функциональность модуля angular/core
import { Component } from '@angular/core';
// функция-декоратор @Component - ассоциирует метаданные с кдассом компонента AppComponent
@Component({
    //selector - селектор css
    // template - шаблон Html
    selector: 'my-app',
    template: `<label>Add name:</label> 
                <input [(ngModel)]="name" placeholder="name">
                <h1>You are welcome {{name}}!</h1>`
})

export class AppComponent {
    name = '';
}