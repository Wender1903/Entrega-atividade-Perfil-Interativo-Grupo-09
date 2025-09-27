#ProfileCard React Component


Grupo:
- Larissa Pires
- Vinicios
- Wender

--------------------------------------------------
Este projeto é uma aplicação React que exibe cards de perfil interativos, utilizando
componentes funcionais, props, eventos e estilização CSS moderna.

--------------------------------------------------
Tecnologias usadas
--------------------------------------------------

- React (via Vite)
- JSX
- CSS modularizado (ProfileCard.css)

--------------------------------------------------
Funcionalidades
--------------------------------------------------

- Exibe nome, idade e status de estudante.
- Estilo profissional com cores sóbrias (azul petróleo e dourado).
- Botão interativo que exibe um alerta com o nome ao ser clicado.
- Animação suave no hover para destaque visual.
- Layout responsivo com múltiplos cards exibidos em flexbox.

--------------------------------------------------
Como rodar o projeto
--------------------------------------------------

1. Clone o repositório (ou copie os arquivos localmente).
2. Instale as dependências:

   npm install

3. Inicie o servidor de desenvolvimento:

   npm run dev

4. Abra o navegador em http://localhost:5173 (ou porta informada no terminal).

--------------------------------------------------
Estrutura principal
--------------------------------------------------

- src/ProfileCard.jsx   -> Componente principal do card.
- src/ProfileCard.css   -> Estilos do card.
- src/App.jsx           -> Utiliza múltiplos ProfileCard com diferentes props.

--------------------------------------------------
Personalização
--------------------------------------------------

Você pode alterar as cores no arquivo ProfileCard.css para adequar o visual ao seu projeto.
Também pode adicionar imagens na área de foto de perfil, substituir o botão por outros
elementos interativos, etc.

--------------------------------------------------
Exemplo de uso
--------------------------------------------------

<ProfileCard name="Maria" age={21} isStudent={true} />
<ProfileCard name="João" age={30} isStudent={false} />
