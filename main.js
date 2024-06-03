// ● შექმენი input, სადაც მომხმარებელს
// შესაძლებლობა ექნება შეიტანოს “:”- ით
// ერთმანეთისგან გამოყოფილი რიცხვები,
// average ღილაკზე დაწკაპების შემდეგ
// დაითვალე ამ რიცხვების საშუალო და
// გამოუტანე ეკრანზე
// ● მაგ: 1:2:3:4:5 ეკრანზე გამოიტანს 3-ს

const numberInput = document.querySelector(".numberInput");
const averageButton = document.querySelector(".averageButton");
const result = document.querySelector(".result");

averageButton.addEventListener("click", () => {
  let input = numberInput.value;
  let num = input.split(":").map(Number);
  let sum = num.reduce((a, b) => a + b, 0);
  let average = sum / num.length;
  result.textContent = "Average: " + average;
});
// ● შექმენი button, რომელზე დაწკაპების
// შემდეგაც გაიხსნება მოდალი და მოდალის
// უკან შავი/გამჭვირვალე background
// ● შექმენი input და button
// ● input-ში მომხმარებელი ჩაწერს ფერს და
// button ღილაკზე დაწკაპების შემდეგ body-ს
// background შეიცვლება ჩაწერილ ფერად
// ● (ფერები რომლის ჩაწერაც შეუძლია: red,
// blue, green, black, white)
// ● თუ სხვა ფერი ჩაწერა, გამოუტანე
// შეტყობინება alert-ის საშუალებით
const modalButton = document.querySelector(".modalBtn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-btn");
const colorInput = document.querySelector(".colorInput");
const colorButton = document.querySelector(".colorBtn");
const myColor = ["blue", "green", "red", "white", "black"];
modalButton.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

colorButton.addEventListener("click", () => {
  let color = colorInput.value.toLowerCase();
  if (myColor.includes(color)) {
    document.body.style.backgroundColor = color;
  } else {
    alert("please enter only  red, blue, green, black or white color  ");
  }
});
