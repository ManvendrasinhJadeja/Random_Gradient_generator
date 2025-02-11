let btn = document.getElementById("CreateBtn");
let CopyBtn = document.getElementById("CopyBtn");
let container = document.getElementById("container");
let CopyGrad;

btn.addEventListener("click", function () {
  let col1 = "";
  let col2 = "";
  let a = "";
  let b = "";
  let deg = Math.floor(Math.random() * 180);
    
  let per = Math.floor(Math.random() * 50);
  let per2 = Math.floor(Math.random() * 50);
  per2 = 50 + per2;
  console.log(per, per2, deg);

  let arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  for (let i = 0; i < 6; i++) {
    a += arr[Math.floor(Math.random() * arr.length)];
  }
  col1 = a;
  for (let i = 0; i < 6; i++) {
    b += arr[Math.floor(Math.random() * arr.length)];
  }
  col2 = b;

  CopyGrad= container.style.background = `linear-gradient(${deg}deg ,#${col1} ${per}% ,#${col2} ${per2}%)`;
  console.log(col1, col2);

});


CopyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(`background: ${CopyGrad};`).then(() => {
      let message = document.getElementById("copyMessage");
      message.style.display = "block";
      message.style.opacity = "1";
      message.classList.remove("hide-message");
  
      // Hide the message after 2 seconds
      setTimeout(() => {
        message.classList.add("hide-message");
        setTimeout(() => {
          message.style.display = "none";
        }, 300); // Extra delay for smooth fade-out
      }, 2000);
    });
  });

