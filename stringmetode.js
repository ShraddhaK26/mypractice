let text = 'I love flowers very much' ;
let textLength = text.length;
console.log(textLength);

let a=text.slice (3,12);
console.log('a>>', a );

let b=text.slice (0, 6)
console.log(b);


//subString (-6,9)
//console.log (text.substring);

//let c=substr;
//console.log(text.substr(2,9));


let r='i am rich girl';
let s=r.replace("rich","poor");
console.log(s);

let t=r.replaceAll("i am rich girl","i am gooodd gul");
console.log(t);


let text1 = "shraddha";
let text2 = "kupekar";
let text3 = text1 + " " + text2;
console.log(text3);

let FN="SALONI";
let LN="kuoekar";
let fullname=FN + " " + LN;
console.log(fullname);


let boy='AMEYYYYY';
let boy2=boy.toLocaleLowerCase();
console.log(boy2);

let baby='veeera';
let baby2=baby.toLocaleUpperCase();
console.log(baby2);

let city='      gadhinglaj    ';
let city2=city.trim();
console.log(city2);
  
let city3=city.trimEnd();
console.log('endtrim' , city3);

let city4=city.trimStart();
console.log('starttrim' ,  city4);

let z='salonikupekar';
console.log(z.charAt(4));

let dob='26/03/2002';
let dob1 = dob.split('/');
console.log(dob1);

let m='dog';
console.log(m.indexOf('g'));
console.log(m.lastIndexOf('g'));

let text4="please locatehghg ase where ase 'locate' occurs!";
console.log(text4.search("locate"));

console.log(text4.match('ase'));

let text5="hello world,welcome to the universe.";
let text6=text4.includes("world");
console.log('includes', text6);

let text7="200 sucess";
console.log(text7.startsWith(20));

console.log(text7.endsWith("e"));

console.log(Array.from( text7.matchAll("sucess")));

