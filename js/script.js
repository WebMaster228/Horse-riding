window.addEventListener('load', function () {
    setBodyLoaded();
    setGoodsBlockLoaded();
});

function setBodyLoaded() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
}

function setGoodsBlockLoaded() {
    let reached = false;
    const GOODS_BLOCK_OFFSET = 300;
    const goodsBlock = document.getElementById('goodsBlock');
    const goodsBlockOffset = goodsBlock.offsetTop;
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', function () {
        let scrolled = window.pageYOffset;
        if (scrolled + windowHeight > goodsBlockOffset + GOODS_BLOCK_OFFSET) {
            if (!reached) {
                goodsBlock.classList.add('goods_block_loaded');
                reached = true;
            }
        }
    })
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('scrollUpArrow').style.display = 'block';
    } else {
        document.getElementById('scrollUpArrow').style.display = 'none'
    }

}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var button = document.getElementById('showAllFeedbacks');
button.addEventListener('click', showAllFeedbacks);
var show = new Boolean(true);
allfeedbacks = document.getElementById('hiddenFeedbacks');

function showAllFeedbacks() {
    if (show) {
        button.classList.add('animatebutton');
        allfeedbacks.classList.remove('hidden');
        allfeedbacks.classList.add('loaded');
        button.innerText = 'СВЕРНУТЬ';
        show = false;
    }

    else {
        allfeedbacks.classList.add('hidden');
        button.classList.remove('animatebutton');
        allfeedbacks.classList.remove('loaded');

        button.innerText = 'ВСЕ УСЛУГИ';
        show = true;
    }

}


var button2 = document.getElementById('showAllTherapy');
button2.addEventListener('click', showAllTherapy);
var show2 = new Boolean(true);
allTherapy = document.getElementById('hiddenTherapy');

function showAllTherapy() {
    if (show2) {
        button2.classList.add('animateTherapy');
        allTherapy.classList.remove('hidden');
        allTherapy.classList.add('loaded');
        button2.innerText = 'СВЕРНУТЬ';
        show2 = false;
    }

    else {
        allTherapy.classList.add('hidden');
        button2.classList.remove('animateTherapy');
        allTherapy.classList.remove('loaded');

        button2.innerText = 'ПОДРОБНЕЕ';
        show2 = true;
    }
}

var button3 = document.getElementById('showAllPhoto');
button3.addEventListener('click', showAllPhoto);
var show3 = new Boolean(true);
allPhoto = document.getElementById('hidden_Photo');

function showAllPhoto() {
    if (show3) {
        button3.classList.add('animatePhoto');
        allPhoto.classList.remove('hidden');
        allPhoto.classList.add('loaded');
        button3.innerText = 'СВЕРНУТЬ';
        show3 = false;
    }

    else {
        allPhoto.classList.add('hidden');
        button3.classList.remove('animatePhoto');
        allPhoto.classList.remove('loaded');
        button3.innerText = 'БОЛЬШЕ';
        show3 = true;
    }
}

function onSubmitForm() {
    const userName = document.getElementById('form__name').value;
    if (userName.split(' ').length != 3) {
        alert("ФИО указано не верно!");
    }
    const userEmail = document.getElementById('form__email').value;
    console.log(userEmail);
    
}







