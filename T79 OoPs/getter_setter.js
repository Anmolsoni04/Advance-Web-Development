class User{
    constructor(name){
        this.name = name
    }

    get name(){
        return this._name;
    }
    set name(val){
        if(val.length <= 5){
            console.log('Your name is too short');
            return;  
        }
        this._name = val
    }
}

let user = new User("Anmolsoni")
console.log(user.name);

user.name = "Anshs"
console.log(user.name);