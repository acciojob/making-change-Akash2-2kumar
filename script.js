class Change{
    constructor(q,d,n,p){
        this.q=q;
        this.d=d;
        this.n=n;
        this.p=p;
    }
}

const makeChange = (c) => {
  // your name here Penny: 0.01
  // Nickel: 0.05
  // Dime: 0.10
  // Quarter: 0.25
  let p=1;
  let n=5;
  let d=10;
  let q=25;
  
  let cp=0;
  let cn=0;
  let cd=0;
  let cq=0;
  cq=Math.floor(c/q);
  c=c%q;
  cd=Math.floor(c/d);
  c=c%d;
  cn=Math.floor(c/n);
  c=c%n;
  cp=Math.floor(c/p);
  return {
        q:cq,
        d:cd,
        n:cn,
        p:cp
    };
  
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
