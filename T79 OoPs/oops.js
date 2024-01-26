// let obj = {
        //     a:1,
        //     b:"Anmol",
        //     c: 2.12
        // }
        // console.log(obj);

        // let animal = {
        //     live: "forest"
        // }

        // let rabbit = {
        //     eats: "food"
        // }

        // // rabbit.__proto__ = animal
        // animal.__proto__ = rabbit

        // (We make a class animal then rabbit, as we know rabbit is also an animal. Now we define in animal that animal live in forest and we define in rabbit that rabbit eats food, so when we run this in console so it shows in animal's onject that animal live in forest and in rabbit's object that rabbit eats the food, but logicaly rabbit also live in forest and similarily animal eats food, so for this we use __proto__ with the help of this we can access both the objects(food & forest) in animal as well as in rabbit class!)

        // CLASS & OBJECTS:
        class Gym{
            constructor(name){
                this.name = name
                console.log('Object is created');
            }
            biceps(){
                console.log('Improves your muscles of hand & shoulder');
            }
            scotts(){
                console.log('Improves your muscles of legs');
            }
            triceps(){
                console.log('Improves the back muscles of shoulder');
            }
            deadLift(){
                console.log('Improves the muscles of chest');
            }
            tracker(){
                console.log('Improves your stamina in your body');
            }
            dumbles(){
                console.log('Improves your strength');
                
            }
       }
        
// EXTENDS keyword -> If we use extend keyword then instead of writing the whole code in new class we can just get all the properties without code the whole in a new class

        // class advanceGym{
        //     constructor(name){
        //         this.name = name
        //         console.log('Object is created');
        //     }
        //     biceps(){
        //         console.log('Improves your muscles of hand & shoulder');
        //     }
        //     scotts(){
        //         console.log('Improves your muscles of legs');
        //     }
        //     triceps(){
        //         console.log('Improves the back muscles of shoulder');
        //     }
        //     deadLift(){
        //         console.log('Improves the muscles of chest');
        //     }
        //     tracker(){
        //         console.log('Improves your stamina in your body');
        //     }
        //     sixpacks(){
        //         console.log('Improves your muscles of legs');
        //     }
        //     dumbles(){
        //         console.log('Improves the back muscles of shoulder');
        //     }
        //     weightLifting(){
        //         console.log('Improves the muscles of chest');
        //     }
        //     tracker(){
        //         console.log('Improves your stamina in your body');
        //     }

        // }

        // EXTENDS keyword -> Instead writing the whole code in new class we can just get all the properties without code the whole in a new class
    
        class advanceGym extends Gym{

            constructor(name){
                super(name)
                console.log('Advance gym is a new object that is created');
            }
        }
        let gym = new Gym("Anmolsoni")
        console.log(gym);
        
        let advgym = new advanceGym("Ansh")
        console.log(advgym);