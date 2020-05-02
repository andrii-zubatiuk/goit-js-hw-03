const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

Object.keys(user).forEach(key => {
  console.log(`${key}:${user[key]}`);
});
