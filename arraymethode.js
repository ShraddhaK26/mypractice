let num=[2,5,7,8,9,5,7,7];
console.log(num.length);
 let num2=num.toString();
 console.log(num2);

 //pop
 const flower=["lily","rose","hibiscus","juii"];
 let flower2=flower.pop();
 console.log(flower);
 console.log(flower2);

 //push
 const cars=["i10","i5","bmw","swift","maruti suzuki"];
 let cars2=cars.push("KIA");
 console.log(cars);
 console.log(cars2);

 //shift
 const flower3=["lily","rose","hibiscus","juii"];
 let flower4=flower3.shift();
 console.log(flower4);
 console.log(flower3);

 const fruit=["banana","papaya","guava","strawberry","Apple"];
 let fruit2 = (fruit.unshift('sst','shraddha'));
 console.log(fruit2);
 console.log(fruit);

 let indexOfApple=fruit.indexOf('Apple');
 console.log(indexOfApple);
 delete fruit[indexOfApple];
 console.log(fruit);

 let flower5=["lily","rose","hibiscus","juii"];
 let flower6= ["...mogra","...juii"];
 let flower7=flower5.concat(flower6);
 console.log(flower7);

 let day = [4,12,2023];
 let date =day.join('-').toString();
 console.log(date);

 let no=[2,3,4,5,6,7,8,9];
 console.log(no.slice(3));

 let fruit0=  ["Banana", "Orange", "Apple", "Mango"];
 fruit0.splice(1,2,'ll','ll');
 console.log(fruit0);

 let test =  ["Banana", "Orange", "Apple", "Mango"];
 let revArray =test.reverse().sort();
 console.log(revArray);

 


 




