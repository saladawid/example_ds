const button = document.querySelector('button');
button.addEventListener("click", () => button.innerText = `Random number: ${Math.floor(Math.random() * 10)}`);