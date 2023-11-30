const user = {
  username: "Rahul",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to Website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// console.log(this);

function two() {
  console.log(this);
}
two();

let arro = () => {
  console.log(this);
};
arro();
