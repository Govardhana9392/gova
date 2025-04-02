document.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      const imageSrc = event.target.src;
      document.body.style.backgroundImage = `url(${imageSrc})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
    }
  });