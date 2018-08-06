//Создание компонента
// Директива import - импортирует функциональность модуля angular/core
import { Component } from '@angular/core';
// функция-декоратор @Component - ассоциирует метаданные с кдассом компонента AppComponent
@Component({
    //selector - селектор css
    // template - шаблон Html
    selector: 'my-app',
    template: `<child-component [userName]="name" [userAge]="age" (onChanged)="onChanged($event)"></child-component>
               <input type="text" [(ngModel)]="name"><br>
               <h2>Clicknumbers: {{clicks}}</h2>`
})
//export - give posibility to use this class in another modules
export class AppComponent {
    name: string = 'Petr';
    age: number = 44;
    clicks:number = 0;
    onChanged(increased:any){
        increased==true?this.clicks++:this.clicks--;
    }
}