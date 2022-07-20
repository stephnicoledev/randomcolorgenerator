const rgbColor = document.getElementById("rgb");
const button = document.getElementById("btn");

button.onclick = () => {
  for (let i = 0; i <= 255; i++) {
    rgbColor.innerText = `rgb(${Math.floor(Math.random() * i)}, ${Math.floor(
      Math.random() * i
    )}, ${Math.floor(Math.random() * i)})`;
  }

  document.body.style.backgroundColor = rgbColor.innerText;
};
