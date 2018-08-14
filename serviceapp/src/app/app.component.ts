//Создание компонента
// Директива import - импортирует функциональность модуля angular/core
import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";
import{Phone} from "./phone";

// функция-декоратор @Component - ассоциирует метаданные с кдассом компонента AppComponent
@Component({
    //selector - селектор css
    // template - шаблон Html
    selector: 'my-app',
    template: `<div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="name" placeholder = "Модель" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(name, price)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Модель</th>
                <th>Цена</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let item of items">
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
            </tr>
            </tbody>
        </table>
    </div>`,
    providers: [DataService]
})
//export - give posibility to use this class in another modules
export class AppComponent implements OnInit {

    items: Phone[] = [];

    constructor(private dataService: DataService){}

    addItem(name: string, price: number){
        this.dataService.addData(name, price);
    }

    ngOnInit(){
        this.items = this.dataService.getData();
    }
}