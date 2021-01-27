let users = [];
let usersData = [];

//localStorage.setItem("users", JSON.stringify(users));
//localStorage.setItem("currentUser", "");

let createUser = (un, pw) => {
  return { un: un, pw: pw };
};

let addUser = (un, pw) => {
  users.push(createUser(un, pw));
  localStorage.setItem("users", JSON.stringify(users));
};

let gotologin = () => {
  let un = document.getElementById("un").value;
  let pw = document.getElementById("pw").value;
  addUser(un, pw);
  window.location.href = "login.html";
};

let check = (e) => {
  let val = e.target.value;
  let property = e.target.getAttribute("id");
  usersData = JSON.parse(localStorage.getItem("users"));

  let found = false;
  usersData.forEach((ele) => {
    if (ele[property] == val) {
      found = true;
    }
  });
  if (!found) {
    e.target.value = "";
    e.target.style.border = "1px solid red";
  } else {
    e.target.style.border = "1px solid black";
  }
};

let gotoindex = () => {
  let un = document.getElementById("un").value;
  let pw = document.getElementById("pw").value;
  let found = false;
  usersData.forEach((ele) => {
    if (ele.un == un && ele.pw == pw) {
      found = true;
    }
  });
  if (!found) {
    alert("user dzn't exist");
  } else {
    localStorage.setItem("currentUser", un);
    console.log("user loggin in..");
    window.location.href = "index.html";
  }
};
