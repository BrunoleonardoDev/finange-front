function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('dark')

      // pegar a tag img
      const img = document.querySelector('.logo img')

      // substituir a imagem
     if(html.classList.contains('dark')) {
         // se tiver dark mode, adicionar imagem dark
         img.setAttribute('src', '../assets/img/logo3.png')
     } else {
         // se tiver sem light mode, manter a imagem original
          img.setAttribute('src', '../assets/img/logo2.png')
     }
}