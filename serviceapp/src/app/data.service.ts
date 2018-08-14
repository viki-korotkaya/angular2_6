import {Phone} from "./phone";

export class DataService{

    private data: Phone[] = [
        {name: "Apple iPhone7", price: 500},
        {name: "HP Elite x3", price: 500},
        { name: "Alcatel Idol S4", price: 130}
    ];

    getData(): Phone[]{
        return this.data;
    };

    addData(name: string, price: number){
        this.data.push(new Phone(name, price));
    };
}