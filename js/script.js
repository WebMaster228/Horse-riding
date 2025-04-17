window.addEventListener('load', function() {
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
    
    window.addEventListener('scroll', function() {
        let scrolled = window.pageYOffset;
        if (scrolled + windowHeight > goodsBlockOffset + GOODS_BLOCK_OFFSET) {
            if (!reached) {
                goodsBlock.classList.add('goods_block_loaded');
                reached = true;
            }
        }  
    })
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop> 50) {
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
        button.innerText ='СКРЫТЬ УСЛУГИ';
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



