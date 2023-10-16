// ここにJavaScriptコードを追加
const photoContainer = document.getElementById('photo-container');
const galleryImages = document.querySelectorAll('.gallery-img');

photoContainer.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY, target } = e;
    const { clientWidth, clientHeight } = target;

    const xPercent = (offsetX / clientWidth) * 100;
    const yPercent = (offsetY / clientHeight) * 100;

    galleryImages.forEach((img) => {
        img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    });
});
