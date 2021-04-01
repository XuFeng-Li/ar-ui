'use strict';

export interface Person {
  name:string,
  age:number
}

export function logPerson(person:Person) {
  console.log("***********************");
  console.log("persion name is : ",person.name);
  console.log("persion age is : ",person.age);
}