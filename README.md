# Desafio XP - Front-end


## 💻 Projeto

Desafio técnico realizado para Front-end no processo seletivo da XP Inc. focado na turma XP da Trybe.
A aplicação consiste em uma plataforma de investimento em ações, com algumas funcionalidades de conta digital. 
O deploy deste projeto foi realizado na Vercel. Acesse aplicacão neste [link.](https://desafio-xp.vercel.app/)

## Versão Mobile
<p align="center">
 <img width="200" src="https://github.com/thiagodanobrega/desafio-xp/blob/master/mobile%20(1).png" alt="exemplo imagem" >
 <img width="200" src="https://github.com/thiagodanobrega/desafio-xp/blob/master/mobile%20(2).png?raw=true" alt="exemplo imagem" >
 <img width="200" src="https://github.com/thiagodanobrega/desafio-xp/blob/master/mobile%20(3).png?raw=true" alt="exemplo imagem" >
</p>

## 🚀 Stack utilizada
Front-End: React, ContextAPI, TailwindCSS, Styled-Components, Headlessui

## Pontos importantes
- Densenvolvi a aplicação focada na negociação de criptoativos, aproveitando o momento de lançamento da XTAGE, 
a plataforma própria da XP para negociação de criptomoedas;
- Foi utilizado a api da [coingecko](https://www.coingecko.com/en/api/documentation) que fornece o histórico de preços das principais criptomoedas;
- Optei por utilizar typescript no desenvolvimento da aplicação pois além de ser uma ferramenta orienta a objetos, 
possibilita a detecção de erros durante o desenvolvimento;
- Utilizei o Headlessui para ajudar na construção de componentes acessíveis;
- Utilizei a react-text-mask para criar mascáras de valor monetário nos input;
- Para os testes unitários utilizei o Vitest e para gerar relatórios de cobertura utilizei a biblioteca c8;
- Para o deploy utilizei o Vercel;
- Para login no site use email: test@email.com e senha: 1234567;

## ⬇️ Instalando dependências

Clone o projeto

```bash
  git clone git@github.com:thiagodanobrega/desafio-xp.git
```

Entre no diretório do projeto:

```bash
  cd desafio-xp
```

Instale as dependências:

```bash
  npm install
```
## ⚡ Executando a aplicação

  ```
  npm run dev
  ```
## 🧪 Executando os testes

Para rodar os testes, execute o seguinte comando:

```bash
  npm run test
```

## Regras de Negócio
Login:
- O Email deve ter um formato válido;
- A senha deve ter no mínimo 7 caracteres;
- Não é possível acessar a página home sem estar logado;

Saldo:
- O saldo deve ser maior ou igual a 0;
- Só é possível fazer saque caso o valor seja menor ou igual ao disponível;

Compra e venda de ativos:
- Só é possível comprar ativos caso a quantidade seja menor ou igual a disponível na corretora;
- Só é possível vender ativos caso a quantidade seja menor ou igual a disponível na carteira;

## 📝 Melhorias Futuras

- [ ] Realizar o back-end para alimentar o front;

## Versão Web

<p align="center">
 <img width="600" src="https://github.com/thiagodanobrega/desafio-xp/blob/master/mobile%20(4).png?raw=true" alt="exemplo imagem" >
</p>


<p align="center">
  <img width="600" src="https://github.com/thiagodanobrega/desafio-xp/blob/master/mobile%20(6).png?raw=true" alt="exemplo imagem" >
</p>


<p align="center">
  <img width="600" src="https://github.com/thiagodanobrega/desafio-xp/blob/master/mobile%20(5).png?raw=true" alt="exemplo imagem" >
</p>

