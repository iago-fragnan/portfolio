const renderizado = false;


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
                entry.target.classList.add('anim-visible');
        }
        else{
            entry.target.classList.remove('anim-visible');
        }
    });
});

const hiddenElements = document.querySelectorAll('.anim-hidden');
hiddenElements.forEach((el) => observer.observe(el));




const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        if (entry2.isIntersecting) {
                entry2.target.classList.add('anim-bt-visible-left');
        }
        else{
            entry2.target.classList.remove('anim-bt-visible-left');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.anim-bt-hidden-left');
hiddenElements2.forEach((el2) => observer2.observe(el2));


const observer3 = new IntersectionObserver((entries3) => {
    entries3.forEach((entry3) => {
        if (entry3.isIntersecting) {
                entry3.target.classList.add('anim-bt-visible-right');
        }
        else{
            entry3.target.classList.remove('anim-bt-visible-right');
        }
    });
});

const hiddenElements3 = document.querySelectorAll('.anim-bt-hidden-right');
hiddenElements3.forEach((el3) => observer3.observe(el3));