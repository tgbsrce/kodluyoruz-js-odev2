let submitDOM = document.querySelector("#liveToastBtn");
let listDOM = document.querySelector("#list");
let inputDOM = document.querySelector("#task");
let ullength = document.getElementsByTagName("li");
let removeAllBtn = document.querySelector("#removeAll");

submitDOM.addEventListener("click", addBtn);
removeAllBtn.addEventListener("click", removeAll);

function removeAll() {
  let liRemove = document.querySelectorAll("li");
  for (var i = 0; i < liRemove.length; i++) {
    liRemove[i].remove();
  }
}

function addBtn() {
  const newTodo = inputDOM.value.trim();
  if (!newTodo) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");

    addItem(newTodo);
  }
  e.preventDefault();
}

function addItem() {
  const listItem = document.createElement("li");
  listDOM.appendChild(listItem);
  listItem.innerHTML = inputDOM.value;
  inputDOM.value = "";
  listItem.onclick = check;

  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  closeButton.onclick = removeButton;

  listItem.append(closeButton);
  listDOM.append(listItem);
}

for (let i = 0; i < ullength.length; i++) {
  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  closeButton.onclick = removeButton;
  ullength[i].append(closeButton);
  ullength[i].onclick = check;
}

function check() {
  this.classList.toggle("checked");
}

function removeButton() {
  this.parentElement.remove();
}
