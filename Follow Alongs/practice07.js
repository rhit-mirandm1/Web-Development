for (let i =2; i<11;i+=2){
    console.log(i);
}
for (let j = 5;j>=1;j--){
    console.log(j);
}

const numbers = [1, 2, 3, 4, 5];

sum =0;
for (const num of numbers){
    sum+=num;
}
console.log(sum);

const student = {
    name: 'John',
    age: 30,
    grade: 'A'
};

for (const key in student) {
    console.log(`${student[key]}`);
}

const book = { title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 };
for (const val in book) {
    console.log(`${val}: ${book[val]}`);
}

const colors = ['red', 'green', 'blue', 'yellow'];
for (const color of colors) {
    console.log(color);
}

const nums = [1, 2, 3, 4, 5];

sum =0;
for (const num of nums){
    sum+=num;
}
console.log(sum);


const temperatures = [32, 68, 75, 82, 56];

temperatures.forEach(function(temp){
    temp = (temp-32)*5/9;
    console.log(temp);
});

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const populations = { 'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston': 2320268 };
cities.forEach(function(city){
    console.log(`${city}: ${populations[city]}`);
})

stars="";
for (g=0;g<5;g++){
    for (u=0;u<=g;u++){
        stars+='*';
    }
    stars += '\n';
}
console.log(stars);