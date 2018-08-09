import {Directive, HostListener, Input, HostBinding, OnInit} from '@angular/core';

@Directive({
    selector: '[bold]'
})
export class BoldDirective implements OnInit{

    @Input() selectedSize = "28px";
    @Input() defaultSize = "31px";

    private fontSize : string;
    private fontWeight = "normal";
    ngOnInit(){
        debugger;
        this.fontSize = this.defaultSize;
    }
    constructor(){}

    @HostBinding("style.fontSize") get getFontSize(){

        return this.fontSize;
    }

    @HostBinding("style.fontWeight") get getFontWeight(){

        return this.fontWeight;
    }

    @HostBinding("style.cursor") get getCursor(){
        return "pointer";
    }

    @HostListener("mouseenter") onMouseEnter() {
        debugger;
        this.fontWeight ="bold";
        this.fontSize = this.selectedSize;
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.fontWeight = "normal";
        this.fontSize = this.defaultSize;
    }
}

    // private setFontWeight(val: string) {
    //     this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
    // }
