
import { obk } from './newUser';

async function addNewUser () {
  let response = await fetch("https://projecct-manager-app.onrender.com/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obk),
  })
let user = await response.json();
return user;
}
try {
  const newUser = addNewUser();
  console.log(newUser);
} catch (error) {
  console.log('eerr');
}
