import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'child-component',
    template: `<p>User name: {{userName}}!</p>
                <p>User age: {{userAge}}</p>
                <button (click)="change(true)">+</button>
                <button (click)="change(false)">-</button>`
})

export class ChildComponent {
    @Input() userName: string;
    @Input() userAge: number;

    @Output() onChanged = new EventEmitter<boolean>();
    change(increased:any){
        this.onChanged.emit(increased);
    }
}