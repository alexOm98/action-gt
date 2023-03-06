const core = require('@actions/core');

const obk = { name: "SUPERAGENT", login: "SUPERAGENT", password: "SUPERAGENT"}
async function run() {
  try {
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
  catch (error) {
    core.setFailed(error.message);
  }
}

run()