console.log(photos);

photos.forEach(photo => {
  console.log(photo);
  const title = photo.querySelector('img').getAttribute('data-title');
  const description = photo.querySelector('img').getAttribute('data-description');

  photo.addEventListener('mouseenter', () => {
    photo.innerHTML += `
      <div class="info">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    `;
  });

  photo.addEventListener('mouseleave', () => {
    photo.querySelector('.info').remove();
  });
});