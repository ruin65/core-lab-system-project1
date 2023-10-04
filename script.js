
// 弹窗相关的事件监听器
const menuIcon = document.getElementById("menu-icon");
const popup = document.getElementById("popup");

menuIcon.addEventListener("click", function () {
    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
});

// 移动图像相关的事件监听器
const movingImages = document.querySelectorAll('.moving-image');
movingImages.forEach(function (image) {
    image.addEventListener('click', function () {
        if (image.style.animationPlayState === 'paused') {
            image.style.animationPlayState = 'running';
        } else {
            image.style.animationPlayState = 'paused';
        }
    });
});


