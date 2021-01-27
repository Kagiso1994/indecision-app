//arguments object - no longer bound with arrow functions

const add = function (a, b) {
    return a + b;
}


//this krywork - no longer bound

var user = {
    name: 'Kagiso',
    cities:['Pretoria', 'Joburg', 'Polokwane'],
    printPlacesLived() {
        /*console.log(this.name);
        console.log(this.cities);*/

        /*const cityMessages = this.cities.map((city) =>{
            return city + '!';
        });*/

       //return cityMessages

       return this.cities.map((city) => `${this.name} has lived in ${city}`);
    }
}

user.printPlacesLived();  

const multiplier = {
    numbers: [10,20,30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }

}

console.log(multiplier.multiply());