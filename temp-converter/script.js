function convert() {
  let celcius = document.getElementById("celcius").value;
  document.getElementById("farenheit").value = celcius * (9 / 5) + 32;
}

function add() {
  let n1 = Number.parseInt(document.getElementById("n1").value);
  let n2 = Number.parseInt(document.getElementById("n2").value);
  document.getElementById("res").value = n1 + n2;
}

function factorial() {
  let n1 = Number.parseInt(document.getElementById("n1").value);
  let fact = 1;
  while (n1 > 0) {
    fact *= n1--;
  }
  document.getElementById("res").value = fact;
}

function apply() {
  if (document.getElementById("black").checked) {
    document.getElementById("box").style.backgroundColor = "black";
    document.getElementById("box").style.color = "green";
  } else {
    document.getElementById("box").style.backgroundColor = "white";
    document.getElementById("box").style.color = "black";
  }
}

let arr = ["green", "red", "orange", "purple", "blue"];
function render() {
  for (let i = 0; i < arr.length; i++) {
    let d = document.createElement("div");
    d.className = "card";
    d.style.backgroundColor = arr[i];
    document.getElementById("demo").appendChild(d);
  }
}

function dropdownmaker() {
  for (let i = 0; i < arr.length; i++) {
    let o = document.createElement("option");
    o.value = arr[i];
    o.innerHTML = arr[i];
    document.getElementById("colors").appendChild(o);
    o.addEventListener("change", function c() {
      console.log(o.value);
    });
  }
}
