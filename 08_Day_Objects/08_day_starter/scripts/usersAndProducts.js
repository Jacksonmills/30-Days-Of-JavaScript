let users = [
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
console.log(users);

const signUpButton = document.querySelector('.js-sign-up');
const signInButton = document.querySelector('.js-sign-in');
const signOutButton = document.querySelector('.js-sign-out');
const loggedInName = document.querySelector('.user-name');

// check local storage for userData
if (localStorage.getItem('userData')) {
  users = JSON.parse(localStorage.getItem('userData'));
  console.log(users);
}
let currUser = localStorage.getItem('user');
// check local storage for user
for (user of users) {
  if (user._id === currUser) {
    user.isLoggedIn = true;
    loggedInName.textContent = user.username;
  }
}

// get unique id
const getNewId = (users) => {
  const existingIds = [];
  for (user of users) {
    existingIds.push(user._id);
  }
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let _id = '';
  for (let i = 0; i < 6; i++) {
    _id += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  if (existingIds.includes(_id)) {
    console.log('ERROR: id already exists!');
    getNewId(users);
  } else {
    return _id;
  }
};

const formatDate = () => {
  const now = new Date();
  const initMonth = now.getMonth() + 1;
  const initDay = now.getDate();
  const initHours = now.getHours();
  const initMinutes = now.getMinutes();
  //date
  const day = initDay >= 10 ? initDay : `0${initDay}`;
  const month = initMonth >= 10 ? initMonth : `0${initMonth}`;
  const year = now.getFullYear();
  // time
  const hours12 = initHours > 12 ? initHours - 12 : initHours;
  const hours = hours12 >= 10 ? hours12 : `0${hours12}`;
  const minutes = initMinutes >= 10 ? initMinutes : `0${initMinutes}`;
  const AMPM = initHours < 12 ? 'AM' : 'PM';

  const formattedDate = `${month}/${day}/${year} ${
    initHours === 0 ? '12' : hours
  }:${minutes} ${AMPM}`;
  return formattedDate;
};

// Sign up
const signUp = (users) => {
  const newUser = {
    _id: getNewId(users),
    username: document.querySelector('#username').value,
    email: document.querySelector('#email').value,
    password: document.querySelector('#psw').value,
    createdAt: formatDate(),
    isLoggedIn: false,
  };

  for (user of users) {
    if (newUser.username === user.username) {
      console.log('Username taken.');
      return;
    }
    if (newUser.email === user.email) {
      console.log('Email already registered.');
      return;
    }
  }
  users.push(newUser);
  return localStorage.setItem('userData', JSON.stringify(users));
};

// Sign in
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
      if (user.isLoggedIn) {
        console.log('User already signed in.');
        return;
      }
      console.log(`Signed in as ${username}(${user._id})`);
      user.isLoggedIn = true;
      localStorage.setItem('user', user._id);
      currUser = localStorage.getItem('user');
      loggedInName.textContent = user.username;
      return;
    }
  }
  console.log('User not found');
  return;
}

// Sign out
function signOut(users, currUser) {
  for (user of users) {
    if (user._id === currUser) {
      user.isLoggedIn = false;
    }
  }
  console.log(users);
  currUser = localStorage.removeItem('user');
  loggedInName.textContent = '';
}
signUpButton.addEventListener('click', (e) => {
  e.preventDefault();
  signUp(users);
  console.log(users);
});
signInButton.addEventListener('click', (e) => {
  e.preventDefault();
  signIn(users);
});
signOutButton.addEventListener('click', (e) => {
  e.preventDefault();
  signOut(users, currUser);
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

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = (products, target, user) => {
  for (product of products) {
    if (product._id === target) {
      console.log(user);
      product.likes.push(user);
    }
  }
};
