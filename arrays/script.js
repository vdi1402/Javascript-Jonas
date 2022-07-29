/*const friends = [ 'megha' , 'tannnu' , 'jahanvi' ]
console.log(friends.length)
console.log(friends[2]);

friends[2] = 'priya'

console.log(friends)


//arrays methods
//push method
friends.push("vidhi")
console.log(friends)


//unshift method

friends.unshift('bhaskar')
console.log(friends)

// ['bhaskar', 'megha', 'tannnu', 'priya', 'vidhi']


friends.pop()
console.log(friends) */


//include method


const friends = [ 'megha' , 'tannnu' , 'ashu' ]
console.log(friends.includes('ashu')) //true because array has element 'ashu'
console.log(friends.includes('vaishali'))  //false because array dont have  element 'vaishali'

// it checks on strict equality if we some number in array and check string of it it willl return false

friends.push(33)
console.log(friends.includes('33')) //false
console.log(friends.includes(33)) //true