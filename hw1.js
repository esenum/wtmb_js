//create two class:
//create three functionalities

Vehicle = class {
 
   constructor(brandName,type,gravity){
       console.log("Vehicle : "+brandName+" & Vehicle Type:"+type);
       this.brandName=brandName;
       this.type=type;  
       this.gravity=gravity;
       this.contests=[]
   }

    //first 
    expose(vehicle){
        console.log(vehicle.brandName+" expose CO molekule like " +this.brandName);
    }
    //second
    appliedPhysicPrincible(vehicle){
        console.log(vehicle.brandName+" has same gravity like " +this.brandName+ " rounded number of:"+this.gravity)
    }
    
    //third 
    attendee(contest){
      this.contests.push(contest) ;
      contest.attendees.push(this);
    }
    
   }

vehicle1 = new Vehicle('BMW Mercedes','Car',10);
vehicle2 = new Vehicle('Boeing','Plane',10);
vehicle3 = new Vehicle('Ferrari','Car',10)
console.log(vehicle1,vehicle2,vehicle3);

vehicle1.expose(vehicle2);
vehicle2.expose(vehicle1);

Contest=class{
    constructor(name){
        this.name=name
        this.attendees=[]
    }
    printAttendeesName(){
        this.attendees.forEach(printName);
    }  
}

printName=vehicle=>console.log(vehicle.brandName,vehicle.type);
tgs=new Contest('Top Gear Series-10');

vehicle1.attendee(tgs);
vehicle2.attendee(tgs);
vehicle3.attendee(tgs);

tgs.printAttendeesName();

vehicle1.appliedPhysicPrincible(vehicle2);
