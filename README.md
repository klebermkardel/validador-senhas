# Validador de Senhas

Este é um aplicativo web simples que permite ao usuário digitar uma senha e confirmar a senha. Ele verifica se a senha atende a certos requisitos, como comprimento mínimo, presença de letras maiúsculas, letras minúsculas, caracteres especiais e se a senha e a confirmação de senha são iguais.

## Tecnologias utilizadas

- React: uma biblioteca JavaScript para construir interfaces de usuário.
- FontAwesome: uma biblioteca de ícones vetoriais para exibir ícones de olho aberto e olho fechado nos campos de senha.
- CSS: para estilização dos componentes e layout do aplicativo.
- JavaScript: para a lógica do aplicativo, manipulação de eventos e validação de senha.

## Funcionalidades

- O usuário pode digitar uma senha no campo "Digite sua senha".
- O campo de senha possui uma opção de visualização da senha com um ícone de olho. Ao clicar no ícone, a senha é exibida como texto legível ou ocultada como um campo de senha normal.
- Após digitar a senha, o usuário pode digitar a mesma senha no campo "Confirme sua senha".
- O campo de confirmação de senha é desabilitado até que a senha seja digitada.
- À medida que a senha é digitada, são exibidos requisitos de senha no campo "Requisitos de Senha", incluindo comprimento mínimo, presença de letras maiúsculas, letras minúsculas, caracteres especiais e se a senha e a confirmação de senha são iguais.
- Os requisitos de senha são destacados em verde se forem atendidos e em vermelho se não forem atendidos.

## Executando o projeto

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório em seu computador.
3. Abra o terminal e navegue até a pasta do projeto.
4. Execute o comando `npm install` para instalar as dependências.
5. Após a instalação das dependências, execute o comando `npm start` para iniciar o aplicativo.
6. O aplicativo estará disponível em `http://localhost:3000` em seu navegador.

## Estrutura do projeto

- O arquivo principal do aplicativo é o `App.js`, que contém o componente principal e importa os componentes `Title`, `Form`, `PasswordInput`, `ConfirmPasswordInput` e `PasswordRequirements`.
- Os estilos do aplicativo estão no arquivo `App.css`, onde são definidos estilos para o layout geral.
- Cada componente tem seu próprio arquivo `.js` e `.css` correspondente, que definem sua estrutura e estilos específicos.
- O componente `PasswordRequirements` verifica as condições da senha e exibe uma lista com os requisitos.

## Vídeo do Projeto

Confira o vídeo abaixo para ver o projeto em funcionamento:

![Vídeo do Projeto](https://github.com/klebermkardel/validador-senhas/blob/main/public/assets/02.07.2023_09.48.06_REC.mp4)


Sinta-se à vontade para explorar e modificar o código conforme necessário. Divirta-se!

