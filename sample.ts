let hello:string = "hello";
// 위와 같이 작성하는것을 typing이라고 부릅니다.

const plus = (a:number, b:number) => a+b;

const greet = (name:string, age:number): string => {
    return `Hello ${name} you are ${age} years old`;
}

console.log(greet("Soul", 23));
//Hello Soul you are 23 years old

const Soul = {
  name: 'Soul',
  age:18,
  hungry:true
}

const Min = {
  name: 'Min',
  hungry:true
}

interface Ihuman{
  name: string;
  age?:number;
  hungry:boolean;
}

const hellotoHuman = (human: Ihuman) => {
  console.log(`Hello ${human.name} you are ${human.age} years old`);
}

hellotoHuman(Soul)
hellotoHuman(Min)

//Hello Soul you are 18 years old
//Hello Min you are undefined years old