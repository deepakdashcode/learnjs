const imageInput = document.getElementById('imageInput');

imageInput.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.body.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
      }
});

const time = document.getElementById('time');
time.addEventListener('click', (event)=>{
    event.stopPropagation()
    const color = prompt("Enter a color (name or hex):", "lightblue");
      if (color) {
        document.body.style.color = color;
      }
})
document.body.addEventListener('dblclick', () => {
    imageInput.click();
});

setInterval(()=>{
const date = new Date()
document.getElementById('time').innerText = date.toLocaleTimeString()
}, 1000)
