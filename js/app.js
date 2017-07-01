
const titulos = {
    aboutMe: "Sobre Mim",
    contact : "Contato",
    works: "Portifólio"
}

const carregaRegrasMenus = function carregaRegrasMenus(){

    let aboutMe = document.querySelector('.about-me');
    let contact = document.querySelector('.contact');
    let works = document.querySelector('.works');

    const itemMenu = document.querySelectorAll('.item-menu');

    for(item of itemMenu){
        item.addEventListener('click', (e) => {
            e = e || window.event;
            e.preventDefault();
            const elemento = e.target || e.srcElement;
            verificaMenu(elemento.attributes['data-tipo'].value);          
        })
    }

    const verificaMenu = function verificaMenu(tipoMenu){

        if(tipoMenu === 'sobre-mim'){
            mostraEscondeSections('block', 'none', 'none')
            mudarTituloMenu(titulos.aboutMe);
            return;
        }
        if(tipoMenu === 'portifolio'){
            mostraEscondeSections('none', 'block', 'none')
            mudarTituloMenu(titulos.works);
            return;
        }
        if(tipoMenu === 'contato'){
            mostraEscondeSections('none', 'none', 'block')
            mudarTituloMenu(titulos.contact);
            return;
        }
    }

    const mostraEscondeSections = function mostraEscondeSections(sobreMim, portifolio, contato){
        aboutMe.style.display = sobreMim;
        works.style.display = portifolio;
        contact.style.display = contato;
    }

    const mudarTituloMenu = function mudarTituloMenu(novoTitulo){
        console.log(document.querySelector('.geral-title').textContent = novoTitulo);
    }
}