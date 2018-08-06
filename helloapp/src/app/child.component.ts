import {Component, Input} from '@angular/core';

@Component({
    selector: 'child-component',
    template: `<p>User name: {{userName}}!</p>
                <p>User age: {{userAge}}</p>`
})

export class ChildComponent {
    @Input() userName: string;
    @Input() userAge: number;
}