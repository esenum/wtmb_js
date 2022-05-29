// var umut= {
//     name: 'Umut', //string
//     age:27, //number
//     greet(person){
//         console.log("Hello " +person.name + ", my name is" + " "+this.name)
//     }
// }

// var mert={
//     name:'Mert',
//     age:34
// }

class Person{
  constructor(name,age) {
      this.name=name
      this.age=age
      this.Meetups=[]
  }
  
    greet(person){
        console.log("Hello " +person.name + ", my name is" + " "+this.name)          
    }

    attend(Meetup) {
        this.Meetups.push(Meetup)
        Meetup.attendees.push(this)
    }
}

umut = new Person('Umut',27)
mert = new Person('Mert',34)
mihri= new Person('Mihri',33)

console.log(umut,mert,mihri)

umut.greet(mert)
mert.greet(umut)

Meetup=class{
constructor(name){
  this.name=name
  this.attendees =[]
}
  printAttendeeNames(){
    this.attendees.forEach(printName) 
  }
}

printName=person => console.log(person.name)
  
wtmb=new Meetup('Women Techmakers Berlin')
umut.attend(wtmb)
mert.attend(wtmb)
mihri.attend(wtmb)

wtmb.printAttendeeNames ()
