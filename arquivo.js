// Cria um objeto XMLHttpRequest (AJAX)
var xhr = new XMLHttpRequest();

// Especifica o método HTTP e o URL do arquivo que você deseja carregar
xhr.open("GET", "tomann.html", true);

// Define a função a ser executada quando a solicitação for concluída
xhr.onload = function () {
  // Verifica se a solicitação foi bem-sucedida
  if (xhr.status >= 200 && xhr.status < 300) {
    // Atualiza o conteúdo do elemento com o ID "conteudo"
    document.getElementById("tomann").innerHTML = xhr.responseText;
  } else {
    // Trata erros, se houver
    console.error("Erro ao carregar o conteúdo: " + xhr.status);
  }
};

// Envia a solicitação
xhr.send();