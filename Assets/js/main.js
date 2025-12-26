
var texto = document.getElementById('m_title');
var typewriter = new Typewriter(texto, {
    strings: ['IAGO F.', 'N3RDY', 'Iago Fragnan', 'N3RDYDEV', 'IAGO F.'],
    autoStart: true,
    loop: true,
    pauseFor: 2000,
    devMode: false,
});



function background(){
    particlesJS("bg", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

}


const about_pfp = document.querySelector('.about-img');
const tooltip = document.getElementById('tooltip-txt');
const obj_email = document.getElementById('tooltip');
obj_email.addEventListener("click", function () { var email = document.getElementsByClassName('about-texto2'); email = email[0].innerText; email = email.replace('📋 Clique para Copiar!', ''); console.log("Clicou -> Copiado " + email); navigator.clipboard.writeText(email); tooltip.innerHTML = '📋 Email Copiado!'; });
obj_email.addEventListener("mouseout", function () { console.log("Saiu"); tooltip.innerHTML = '📋 Clique para Copiar!'; });
obj_email.addEventListener("mouseover", function () { console.log("Entrou"); });

let img_clicks = 0;
about_pfp.addEventListener("click",
    function () {
        img_clicks++;
        if (img_clicks >= 5) {
            console.log("Modo PERFEITO Ativado!");
            const alltext = document.querySelectorAll("h1, h2, h3, a, p, button");
            alltext.forEach(element => {
                element.style.fontFamily = "Comic Sans MS", "Comic Sans", "cursive";
            });
        }
        else {
            console.log("Clicou! " + img_clicks);
        }
    });



var dragblock = document.querySelectorAll("[id='imgblock']");
for (var i = 0; i < dragblock.length; i++)
    dragblock[i].setAttribute('draggable', false);
