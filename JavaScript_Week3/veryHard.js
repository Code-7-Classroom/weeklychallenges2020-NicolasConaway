// Part 1
var Person = function(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
}

var nic = new Person('Nic', 'student', 19);

// Part 2
Person.prototype.exercise = function() {
    console.log(`Running is the greatest, said ${this.name}.`);
}
nic.exercise();

// Part 3
Person.prototype.fetchJob = function() {
    console.log(`${this.name} is a ${this.job}`);
}
nic.fetchJob();

// Part 4
var Programmer = function(name, job, age, languages) {
    Person.call(this, name, job, age);
    this.languages = languages;
    this.busy = true;

}
var john = new Programmer('John', 'teacher', 27, ['javascript']);

// Part 5
Programmer.prototype.completeTask = function() {
   this.busy = false;
}
Programmer.prototype.acceptNewTask = function() {
    this.busy = true;
 }

 // Part 6
 Programmer.prototype.offerNewTask = function() {
    if (this.busy === true) {
        console.log(`${this.name} can't accept any new tasks.`);
    } else if (this.busy === false) {
        console.log(`${this.name} would love to take on a new responsibility.`)
    }
 }
 john.offerNewTask();

 // Part 7
 Programmer.prototype.learnLanguage = function() {
    console.log(this.languages.push('html', 'css'));
 }
 
 Programmer.prototype.listLanguages = function() {
    this.learnLanguage();
    console.log(this.languages);
 }
 john.listLanguages();

 // Part 8
 var dorian = new Programmer('Dorian', 'back-end', 35, ['php']);
 dorian.completeTask();
 dorian.offerNewTask();
 dorian.listLanguages();