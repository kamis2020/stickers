'use strict';
const widthElement = document.getElementById('width');
const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');

formImage.addEventListener('change', () => {
    uploadFile(formImage.files[0]);
});

function uploadFile(file) {
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        alert('Разрешены только изображения.');
        formImage.value = '';
        return;
    }
    if (file.size > 5 * 1024 * 1024) {
        alert('Файл должен быть менее 5 МБ.');
        return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
        formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
    };
    reader.onerror = function (e) {
        alert('Ошибка');        
    };
    reader.readAsDataURL(file);
}

