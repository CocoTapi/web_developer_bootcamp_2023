/**Define an object called hen.  It should have three properties:

name should be set to 'Helen'

eggCount should be set to 0

layAnEgg should be a method which increments the value of eggCount by 1 and
returns the string "EGG".  You'll need to use this.

hen.name // "Helen"
hen.eggCount // 0
hen.layAnEgg() // "EGG"
hen.layAnEgg() // "EGG"
hen.eggCount // 2
 * 
 */

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function() {
        this.eggCount++; //why does this work?
        return "EGG";
    }
}
console.log(hen.eggCount) //0
const egg = hen.layAnEgg() // returns and sets "egg" variable as string "EGG"
console.log(egg) // "EGG"
console.log(hen.eggCount) //1

/**************************** */

const henTemplate = {
    name: 'Change_ME!',
    eggCount: 0,
    layAnEgg: function (num) {
        this.eggCount++;
        return "EGG";
    }
}

const hen1 = new henTemplate();
const hen2 = new henTemplate();
console.log(hen1.name) // "Change_ME"
hen1.name = "Jerry";
console.log(hen1.name) // "Jerry"
hen1.layAnEgg(100);
hen2.layAnEgg(3);
console.log(hen1.eggCount); //100
console.log(hen2.eggCount); //3

hen1.eggCount += 100; //why not this? (rhetorical)

//here is why:

hen1.eggCount = -5; //this isnt good, we can;t have negative eggs
console.log(hen1.eggCount); //-5

//what is the solution then?
const henTemplate2 = {
    name: 'Change_ME!',
    eggCount: 0,
    layAnEgg: function (num) {
        if (num <= 0) { 
            return "NO EGG";
        }
        this.eggCount++;
        return "EGG";
    }
}

const hen3 = new henTemplate2;
hen3.layAnEgg(3);
console.log(hen3.eggCount); //3
hen3.layAnEgg(-5);
console.log(hen3.eggCount); //3
