const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
];
let currUser = '';
// _id: 'ab12ex',
// username: 'Alex',
// email: 'alex@alex.com',
// password: '123123',
// createdAt: '08/01/2020 9:00 AM',
// isLoggedIn: false,

// Sign Up
// allows user to add to the collection. If user exists, inform the user that he has already an account.
const signUpButton = document.querySelector('.js-sign-up');
const getNewId = (users) => {
  const existingIds = [];
  for (user of users) {
    console.log(user);
    existingIds.push(user._id);
  }
  // create unique id
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let _id = '';
  for (let i = 0; i < 6; i++) {
    _id += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  if (existingIds.includes(_id)) {
    console.log('ERROR: _id already exists!');
    getNewId(users);
  } else {
    return _id;
  }
};

const signUp = (users) => {
  // get user form inputs
  const _id = getNewId(users);
  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#psw').value;
  const createdAt = new Date(); // TODO: format date
  let isLoggedIn = false;

  const newUser = {
    _id: _id,
    username: username,
    email: email,
    password: password,
    createdAt: createdAt,
    isLoggedIn: isLoggedIn,
  };

  const existingUsernames = [];
  const existingEmails = [];
  for (user of users) {
    existingUsernames.push(user.username);
    existingEmails.push(user.email);
  }

  if (
    existingUsernames.includes(newUser.username) ||
    existingEmails.includes(newUser.email)
  ) {
    console.log('ERROR: User already exists!');
  } else {
    return newUser;
  }
};
signUpButton.addEventListener('click', (e) => {
  e.preventDefault();
  users.push(signUp(users));
});
console.log(users);

// Sign in
const signInButton = document.querySelector('.js-sign-in');
function signIn(users) {
  const username = document.querySelector('#username-sign-in').value;
  const email = document.querySelector('#email-sign-in').value;
  const password = document.querySelector('#psw-sign-in').value;

  for (user of users) {
    if (
      user.username === username &&
      user.email === email &&
      user.password === password
    ) {
      console.log(`Signed in as ${username}`);
      localStorage.setItem('user', user._id);
      currUser = localStorage.getItem('user');
    } else {
      console.log(`ERROR: User not found.`);
    }
  }
}
signInButton.addEventListener('click', (e) => {
  e.preventDefault();
  signIn(users);
  console.log(rateProduct(products, 'eedfcf', currUser, 420));
  console.log(averageRating(products, 'eedfcf'));
  console.log(likeProduct(products, 'eedfcf', currUser));
  console.log(products);
});

// Sign out
const signOutButton = document.querySelector('.js-sign-out');
function signOut(user) {
  currUser = localStorage.clear();
}
signOutButton.addEventListener('click', (e) => {
  e.preventDefault();
  signOut(currUser);
});

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
];
// _id: 'eedfcf',
// name: 'mobile phone',
// description: 'Huawei Honor',
// price: 200,
// ratings: [
//   { userId: 'fg12cy', rate: 5 },
//   { userId: 'zwf8md', rate: 4.5 },
// ],
// likes: [],

// Create a function called rateProduct which rates the product
const rateProduct = (products, target, user, rating) => {
  for (product of products) {
    if (product._id === target) {
      product.ratings.push({ userId: user, rate: rating });
    }
  }
};

// Create a function called averageRating which calculate the average rating of a product
const averageRating = (products, target) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === target) {
      let sum = 0;
      let count = 0;
      for (rating of products[i].ratings) {
        sum += rating.rate;
        count++;
      }
      return sum / count;
    }
  }
};
console.log(averageRating(products, 'eedfcf'));

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = (products, target, user) => {
  for (product of products) {
    if (product._id === target) {
      console.log(user);
      product.likes.push(user);
    }
  }
};
