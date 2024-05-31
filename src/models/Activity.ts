import IActivity from "../interfaces/IActivity";

class Activity implements IActivity {

    private name : string;
    private calories : Calorie;

    public constructor(name : string){
        this.name = name;

    }
    public setName(name : string) : void {
        
        this.name = name;
    }; 
    public getName() : string {
        
        return this.name;
    };  

    public setCalories(calories : number) : void {
        
        
        this.calories = Math.round(calories * 100) / 100;
    }; 
    public getCalories() : number {
        
        return this.calories;
    };    

}

export default Activity;