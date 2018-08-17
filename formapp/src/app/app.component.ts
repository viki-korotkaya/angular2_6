//Создание компонента
// Директива import - импортирует функциональность модуля angular/core
import { Component } from '@angular/core';

export class User{
    name: string;
    email: string;
    phone: string
}

// функция-декоратор @Component - ассоциирует метаданные с кдассом компонента AppComponent
@Component({
    //selector - селектор css
    // template - шаблон Html
    selector: 'my-app',
    template: `<div>
        <div class="form-group">
            <label>Name</label>
            <input class="form-control" name="name" [(ngModel)]="user.name" #name="ngModel" required />
            <div [hidden]="name.valid || name.untouched" class="alert alert-danger">No name specefied</div>
        </div>
        <div class="form-group">
            <label>Email</label>
            <input class="form-control" type="email" name="email" [(ngModel)]="user.email" #email="ngModel" required pattern="[a-zA-Z]{2,3}" email/>
            <div [hidden]="email.valid || email.untouched" class="alert alert-danger">Invalid email</div>
        </div>
        <div class="form-group">
            <label>Phone number</label>
            <input class="form-control" name="phone" [(ngModel)]="user.phone" #phone="ngModel" required pattern="[0-9]{10}"/>
            <div [hidden]="phone.valid || phone.untouched" class="alert alert-danger">Invalid phone</div>
        </div>
        <div class="form-group">
            <button class="btn btn-default" (click)="addUser()" [disabled]="name.invalid || email.invalid || phone.invalid">Добавить</button>
        </div>
    </div>`
})
//export - give posibility to use this class in another modules
export class AppComponent {

   user: User = new User();

   addUser(){
       console.log(this.user);
   }
}