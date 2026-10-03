# Portfólio

Site estático (HTML, CSS e JavaScript puros), sem instalação nem build.

## Estrutura
- `projetos.js`: todo o conteúdo (perfil, experiência e projetos). É o único arquivo que você edita.
- `index.html` e `style.css`: layout. Só mexa se quiser mudar o visual.
- `img/`: imagens dos projetos (prints de painéis, diagramas BPMN).

## Adicionar um projeto
1. Copie um bloco de `ITEMS` em `projetos.js` e ajuste título, descrição, tags e status.
2. Se tiver imagem, salve em `img/` e preencha `imagem` e `alt`.
3. Para arquivos (planilha, SQL, .pbix, notebook), suba no GitHub e coloque o link em `links`.

## Publicar
1. Crie um repositório no GitHub e envie estes arquivos.
2. No Netlify: Add new site, Import an existing project, escolha o repositório.
3. Deixe o comando de build vazio e o diretório de publicação como `/`.
4. A cada commit no GitHub, o site atualiza sozinho.

Antes de publicar qualquer diagrama ou dado de trabalho, retire nomes de empresa, sistemas internos e informações confidenciais.
