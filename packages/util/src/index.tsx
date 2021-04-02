import {parse, stringify} from 'qs';

export interface Person {
  name: string | undefined;
  age:number | undefined;
}

export function logPerson(person:Person) {
  console.log("***********************");
  console.log("persion name is : ",person.name);
  console.log("persion age is : ",person.age);
}