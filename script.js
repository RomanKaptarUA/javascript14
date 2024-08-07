//1 
 // const names = ['Yura', 'Nika', 'Misha', 'David', 'Roman', 'Bohdan'];
    // console.log(names);

//2
//     const names = [
//    {name: 'Yura', eyeColor: 'blue'},
//    {name: 'Nika', eyeColor: 'brown'},
//    {name: 'Misha', eyeColor: 'brown'},
//    {name: 'David', eyeColor: 'green'},
//    {name: 'Roman', eyeColor: 'blue'}, 
//    {name: 'Bohdan', eyeColor: 'blue'}, 
// ];
// console.log(names);

//3
// const names = [
//     {name: 'Yura', eyeColor: 'blue', gender: 'male'},
//     {name: 'Nika', eyeColor: 'brown', gender: 'female'},
//     {name: 'Misha', eyeColor: 'brown', gender: 'male'},
//     {name: 'David', eyeColor: 'green', gender: 'male'},
//     {name: 'Roman', eyeColor: 'blue', gender: 'male'}, 
//     {name: 'Bohdan', eyeColor: 'blue', gender: 'male'}, 
// ];
// console.log(names);

//4
// const names = [
//     {name: 'Yura', eyeColor: 'blue', gender: 'male', isActive: true},
//     {name: 'Nika', eyeColor: 'brown', gender: 'female', isActive: true},
//     {name: 'Misha', eyeColor: 'brown', gender: 'male', isActive: true},
//     {name: 'David', eyeColor: 'green', gender: 'male', isActive: true},
//     {name: 'Roman', eyeColor: 'blue', gender: 'male', isActive: true}, 
//     {name: 'Bohdan', eyeColor: 'blue', gender: 'male', isActive: true}, 
// ];
// console.log(names);

//5
// const names = [
//     {name: 'Yura', eyeColor: 'blue', gender: 'male', isActive: true, email: 'email1@gmail.com'},
//     {name: 'Nika', eyeColor: 'brown', gender: 'female', isActive: true, email: 'email2@gmail.com'},
//     {name: 'Misha', eyeColor: 'brown', gender: 'male', isActive: true, email: 'email3@gmail.com'},
//     {name: 'David', eyeColor: 'green', gender: 'male', isActive: true, email: 'email4@gmail.com'},
//     {name: 'Roman', eyeColor: 'blue', gender: 'male', isActive: true, email: 'email5@gmail.com'}, 
//     {name: 'Bohdan', eyeColor: 'blue', gender: 'male', isActive: true, email: 'email6@gmail.com'}, 
// ];
// const name = names.find(name => name.email === 'email5@gmail.com');
// console.log(name);
// console.log(names);

const age = [3, 5, 34, 25, 25, 18];
console.log(age.filter(max => max < 80));
console.log(age.filter(min => min > 12));