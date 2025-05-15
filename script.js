document.addEventListener('DOMContentLoaded', () => {
    const imageSlide = document.getElementById('imageSlide');
    const images = [
        '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
        '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'
    ];

    // Dynamically create image list
    images.forEach((imageName, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `./assets/images/${imageName}`;
        img.alt = `Image ${index + 1}`;
        img.classList.add('gallery');
        li.appendChild(img);
        imageSlide.appendChild(li);
    });

})