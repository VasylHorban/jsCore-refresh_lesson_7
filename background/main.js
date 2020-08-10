const box = document.querySelector('#box');
const colors = ['#e1a7a2', '#709c75', '#2b8759', '#fae39c', '#6fb1b4', '#ff6f5e', '#2c3d63', '#279289', '#ac67ef'];
const imgs = ['https://i.pinimg.com/originals/aa/98/ce/aa98ce342844fe8f283bd3cb650425e7.jpg', 'https://i0.wp.com/msoffice-prowork.com/wp-content/uploads/2019/04/surfacefamily_1920_1080.jpg?fit=1920%2C1080&ssl=1', 'https://luxfon.com/large/201203/8367.jpg', 'https://lh3.googleusercontent.com/proxy/ASUwV5-gi7UhhyLuwFuoptZRaNDduALEasDAZU8IcTbIs0ULOEL01AFHuaCSzJl2gRCE8Egm_GiIXoo8oTbZDJVHmuXvspyj7ODHGvbIR95dq5HqvSUhHY_0SecQMRTNA6E6sMO6Q8J7_ORCphR4FOG8kMHDsA', 'https://realadmin.ru/assets/images/articles/2017/12/1.jpg', 'https://lh3.googleusercontent.com/proxy/IOPxAy5H3zDrZIctakeCECPQuhWKvJbY8pWipVqYWks_HbfBZRq4rhJ5hsnre4QDoQx4PD6oqrvLcr6y9l-Suux-0mNf5zYkX3veqwWhNiZxFCYVT4fbabPPOhVMUR-nWjG5gto2', 'https://cs13.pikabu.ru/post_img/big/2019/11/04/0/1572817188178611244.jpg', 'https://misea.ru/images/u/pages/158/src/coast-540123-1920.jpg', 'https://www.pc-school.ru/wp-content/uploads/2017/11/wallpaper_thumb-960x460.jpg'];
let open = null;

function initHTML(arr, tag) {
    box.innerHTML = '';
    arr.forEach((elem, i) => {
        let item;
        if (tag == 'div') {
            item = document.createElement("div")
            item.style.background = arr[i]
        } else {
            item = document.createElement("img")
            item.src = arr[i]
        }
        item.classList.add('box-item')
        item.setAttribute("data-index", i)
        box.append(item)
    })
}
document.querySelector('#color').addEventListener('click', () => {
    open = 'colors'
    initHTML(colors, 'div')
})
document.querySelector('#img').addEventListener('click', () => {
    open = 'img'
    initHTML(imgs, 'img')
})

box.addEventListener('click', e => {
    if (e.target.classList.contains('box-item')) {
        let index = +e.target.getAttribute('data-index')
        if (open == 'colors') {
            fillBody(colors, index)
        } else {
            fillBody(imgs, index)
        }
    }
})

function fillBody(arr, i) {
    let body = document.querySelector('body');
    if (open == 'colors') {
        body.style.background = arr[i]
    } else {
        body.style.background = `url(${arr[i]})no-repeat center top fixed`;
        body.style.backgroundSize = 'cover';
    }
}
