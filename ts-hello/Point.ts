 export class Point
{

    constructor(private _x?:number, private _y?:number){}

    get x()
    {
        return this._x;
    }
    get y()
    {
        return this._y;
    }

    public draw()
    {
        console.log("X="+this.x+ ",Y="+this.y);
    }
    public draw1()
    {
        return "ch";
    }
    public draw2()
    {
        return 1;
    }
}



