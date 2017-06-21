addEventListener('load', () => {
   
   carregaRegrasMenus();

});

const carregaRegrasMenus = function carregaRegrasMenus(){

    let aboutMe = document.querySelector('.about-me');
    let contact = document.querySelector('.contact');
    let works = document.querySelector('.works');

    const itemMenu = document.querySelectorAll('.item-menu');

    for(item of itemMenu){
        item.addEventListener('click', (e) => {
            e = e || window.event;
            e.preventDefault();
            verificaMenu(e.srcElement.attributes['data-tipo'].value);
            console.log(e.srcElement.attributes['data-tipo']);
        })
    }

    function verificaMenu(tipoMenu){
        if(tipoMenu === 'sobre-mim'){
            mostraEscondeSections('block', 'none', 'none')
            return;
        }
        if(tipoMenu === 'portifolio'){
            mostraEscondeSections('none', 'block', 'none')
            return;
        }
        if(tipoMenu === 'contato'){
            mostraEscondeSections('none', 'none', 'block')
            return;
        }
    }

    function mostraEscondeSections(sobreMim, portifolio, contato){
        aboutMe.style.display = sobreMim;
        works.style.display = portifolio;
        contact.style.display = contato;
    }
}