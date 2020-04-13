//1. how is information stored in an object?
// It is kept within a block as different variables that are assigned value waiting to be used. can be called by
// typing in console.log(object.variable);

var me = {
    name: 'Nicolas Conaway',
    sayHi: () => {
        console.log(`Hello my name is ${me.name}`);
    }
 };
 me.sayHi();

console.log(me.name);
