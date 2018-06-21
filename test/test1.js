for (let i=0;i<12;i++){} console.log(i); /*i is not defined*/
const a=12;a=13;console.log(a); /*type error*/
const g={b:12};console.log(g.b=12);console.log(g.b); /*12 12*/
const [head,...tail]=[1,2,3,4];console.log(tail); /*[2,3,4]*/