let getUzWord = document.querySelector("#uzWords");
let getEnWord = document.querySelector("#enWords");
let sendBtn = document.querySelector("#sendBtn");
let form = document.querySelector("form");
let list = document.querySelector("#list");
let checkList = document.querySelector("#checkList");
let checkBtn = document.querySelector("#check");
let delBtn = document.querySelector("#delete");
let words = [];
let words1 = words;
let checkWords = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  pushWord();
});

function renderWord() {
  let html = "";
  if (words.length) {
    words.forEach((word) => {
      html += `<div class="flex items-center w-full text-lg font-medium border-b-2 divide-slate-200 py-2">
        <p class="font-medium text-lg mr-[153px]">${words.length * 1}</p>
        <p id="enWord" class="mr-[149px]">${word.en}</p>
        <p id="uzWord" class="mr-32">${word.uz}</p>
        <div class="flex gap-3">
          <button id="check" onclick="check(${word.id})">
            <i class="fa-solid fa-circle-check" style="color: #06cf02"></i>
          </button>
          <button id="delete">
            <i class="fa-solid fa-trash" style="color: #ff0001" onclick="del(${
              word.id
            })"></i>
          </button>
        </div>
      </div>`;
    });
  }
  list.innerHTML = html;
}

function renderCheck() {
  let html = "";
  if (checkWords.length) {
    checkWords.forEach((checkWord) => {
      html += `<div class="flex items-center w-full text-lg font-medium border-b-2 divide-slate-200 pb-2">
            <p class="id font-medium text-lg mr-[154px]">${
              checkWords.length * 1
            }</p>
            <p id="enWord" class="mr-[153px]">${checkWord.en}</p>
            <p id="uzWord" class="mr-32">${checkWord.uz}</p>
            <div class="flex gap-3">
              <button id="check" onclick="returnedWord(${checkWord.id})">
                <i
                  class="fa-solid fa-share fa-flip-horizontal"
                  style="color: #3a7cee"
                ></i>
              </button>
              <button id="delete">
              <i class="fa-solid fa-trash" style="color: #ff0001" onclick="del(${
                checkWord.id
              })"></i>
              </button>
            </div>
          </div>`;
    });
  }
  checkList.innerHTML = html;
}

function pushWord() {
  words.push({
    id: words.length,
    en: getEnWord.value,
    uz: getUzWord.value,
  });
  renderWord();
}
function del(idWord) {
  words = words.filter((word) => word.id != idWord);
  checkWords = checkWords.filter((word) => word.id != idWord);
  renderWord();
  renderCheck();
}
function check(checkword) {
  words = words.filter((word) => word.id != checkword);
  let newWord = words1.filter((word) => word.id == checkword);
  checkWords.push(newWord[0]);
  renderCheck();
  renderWord();
  newWord = null;
}

function returnedWord(returnWord) {
  let newWord = checkWords.filter((word) => word.id == returnWord);
  checkWords = checkWords.filter((word) => word.id != returnWord);
  words.push(newWord[0]);
  renderCheck();
  renderWord();
  newWord = null;
}
