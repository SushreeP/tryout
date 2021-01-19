let array = [7, 9, 8, 3, 5, 3, 7];
let sum = 0;
let i = 0;
while (i < array.length) {
  sum += array[i++];
}
console.log(sum);
function factorial() {
  let fact = 1;
  let n = Number.parseInt(document.getElementById("n1"));
  while (n > 0) {
    fact *= n--;
  }
  document.getElementById("res").value = fact;
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

let carlist = [
  { brand: "Ford", model: "mustang", color: "red", owner: "sushree" },
];

function addtoList() {
  let c = {
    brand: document.getElementById("brand").value,
    model: document.getElementById("model").value,
    color: document.getElementById("color").value,
    owner: document.getElementById("owner").value,
  };
  carlist.push(c);
}

function renderCard() {
  for (let i = 0; i < carlist.length; i++) {
    let br = document.createElement("h6");
    let mo = document.createElement("h6");
    let co = document.createElement("h6");
    let ow = document.createElement("h6");

    br.innerHTML = carlist[i].brand;
    mo.innerHTML = carlist[i].model;
    co.innerHTML = carlist[i].color;
    ow.innerHTML = carlist[i].owner;

    let card = document.createElement("div");
    card.className = "card";
    card.appendChild(br);
    card.appendChild(mo);
    card.appendChild(co);
    card.appendChild(ow);
    document.getElementById("car-cards").appendChild(card);
  }
}
