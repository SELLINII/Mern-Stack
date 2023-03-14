
//________________1__________________________//
console.log(hello);                                     
var hello = 'world';                                 

//we declare the variable before the console.log

//_________________the solution____________________//

var hello = "world";
console.log(hello);

//_________________2_________________________//

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//_____________the solution____________________//
//out put:magnet//
//_________________3_________________________//
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//_____________the solution____________________//
//out put:super cool//
//_________________4_________________________//
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//_____________the solution____________________//
//out put:chicken
//half-chicken//
//_________________5_________________________//
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//_____________the solution____________________//
mean();  
console.log(food);
function mean() {
    food = "chicken";
    console.log(food);
     food = "fish";
    console.log(food);
}
console.log(food);
//output:
// chicken
// fish
// fish
// fish
//_________________6________________________/
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//______________________the solution________________//
// output:
// undefined
// rock 
// r&b 
// disco
//________________7____________________________//
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//______________________the solution__________________//
// san jose
// seattle 
// burbank
// san jose
//_____________________8_____________________//
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// **************************************************************************//
// i don't understand the optional one








