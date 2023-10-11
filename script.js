//function toggleMode(){
//    const html = document.documentElement
//
//    if(html.classList.contains('light')){
//        html.classList.remove('light')
//    } else{
//        html.classList.add('light')
//    }
//}


//Inves de fazer todo if else acima, podemos apenas usar a função 'toggle' que já existe no JavaScript
function toggleMode(){
    const html = document.documentElement //Pegando o parâmetro documentElement do objeto hmtl e atribuindo a variável html

    html.classList.toggle('light')

//Para alterar a imagem do avatar, temos que:
//1.Pegar a tag img
    const img = document.querySelector('#profile img')

//Substituir a imagem. Se tiver light mode, adicionar a imagem light. Se tiver dark mode, manter a imagem normal
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/meu_avatar_light.svg')
        img.setAttribute('alt', 'Fotinha na praia papai, aiaiai uiui')
    }
    else{
        img.setAttribute('src', './assets/meu_avatar_dark.svg')
        img.setAttribute('alt', 'Olha o vampirinhoo')
    }
}