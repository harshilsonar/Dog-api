const button = document.getElementById('aimage');
const imageContainer = document.getElementById('ico');

button.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      const newimg = document.createElement('img');
      newimg.src = data.message;
      newimg.style.width = '100px';
      newimg.style.height = '200px';
      newimg.style.display = 'inline-block';
      imageContainer.appendChild(newimg);
    });
});