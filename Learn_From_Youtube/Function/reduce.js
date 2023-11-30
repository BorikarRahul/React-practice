const shoppinglist = [
    {
        courseName: 'JS',
        price: 2999
    },
    {
        courseName: 'Python',
        price: 999
    },
    {
        courseName: 'Mobile Dev course',
        price: 5999
    },
    {
        courseName: 'Data Science course',
        price: 12999
    },
    {
        courseName: 'Java',
        price: 1999
    }
]

let totalPrice = shoppinglist.reduce((acc, currValue) => acc + currValue.price, 0);

let courseName = shoppinglist.reduce((acc, currValue) => acc + currValue.courseName, "");

let courseNameFiltered = shoppinglist.reduce((acc, curr) => acc + curr.price == 2999, 0);

let allPrice = shoppinglist.map((num) => num.price);

let course = shoppinglist.filter((num) => num.price > 5000);

console.log(totalPrice, courseName, course, allPrice, course);
