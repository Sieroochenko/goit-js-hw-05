const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .reduce((totalBalance, user) => totalBalance + user.balance, 0);
const allUsers = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
];

const totalBalanceMale = getTotalBalanceByGender(allUsers, "male");
console.log(`Total balance for males: ${totalBalanceMale}`);

const totalBalanceFemale = getTotalBalanceByGender(allUsers, "female");
console.log(`Total balance for females: ${totalBalanceFemale}`);
