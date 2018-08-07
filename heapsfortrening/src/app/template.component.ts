import {Component} from "@angular/core";

@Component({
    selector: 'template-component',
    template: `
                <p>{{counter}}</p>
    `
})

export class TemplateComponent {
    counter: number = 0;
    increment(){this.counter++};
    decrement(){this.counter--};
}