var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
 console.log(a); //will log 10 not 100 because of shadowing
 console.log(b); //ReferenceError: b is not defined since b is block scoped