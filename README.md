# Portfólio

Site estático (HTML, CSS e JavaScript puros), sem instalação nem build.

## Arquivos
- `projetos.js`: todo o conteúdo (perfil, formação, experiência, habilidades, cursos e projetos). É o único que você edita.
- `index.html` e `style.css`: layout. Só mexa se quiser mudar o visual.
- `img/`: imagens dos projetos, certificados e foto.

## Menu superior
Sobre, Experiência, Habilidades, Projetos, Cursos e Contato. Seções vazias (Habilidades ou Cursos sem itens) somem sozinhas, junto com o item do menu.

## Adicionar imagem a um projeto
1. Salve a imagem em `img/` (nome sem espaços nem acentos).
2. No projeto, preencha `imagem: "img/nome.png"` e `alt: "descrição curta"`.

## Menu "Código e arquivos"
No projeto, preencha `arquivos` com os links do GitHub:
`arquivos: [{ texto: "Consultas SQL", url: "https://github.com/...", tipo: "SQL" }, { texto: "Planilha", url: "https://github.com/...", tipo: "Excel" }]`
Com um link vira botão; com vários vira menu suspenso.

## Cursos e certificações
Preencha a lista `CURSOS` (exemplo comentado no arquivo).

## Publicar
Envie os arquivos ao repositório do GitHub. O Netlify republica o site em cerca de um minuto.
Antes de publicar qualquer diagrama ou dado de trabalho, retire nomes de empresa, sistemas internos e informações confidenciais.
