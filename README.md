# RedPulse: front-end

Front-end em **Angular** de um aplicativo de doação de sangue, feito na disciplina **Experiência Criativa** do 1º semestre de Engenharia de Software (PUCPR). O app junta em um só lugar doadores, hospitais que precisam de sangue e médicos.

## Telas

| Rota | Tela | O que mostra |
|---|---|---|
| `/home` | Início | Saudação, atalhos para Doe Sangue, Doadores, Hospitais e Médicos, e as doações recentes |
| `/doadores` | Doadores | Lista de doadores com tipo sanguíneo e localização |
| `/hospitais` | Hospitais | Hospitais e os tipos sanguíneos que estão em urgência |
| `/medicos` | Médicos | Médicos com especialidade e CRM |
| `/perfil` | Meu perfil | Dados do usuário (nome, tipo sanguíneo, última doação) |
| `/bolsas` | Bolsas | Listagem de bolsas de sangue (em construção) |

Os dados das telas são fictícios, só para demonstrar o layout.

## Estrutura

- `src/app/header` e `src/app/footer`: cabeçalho e rodapé que aparecem em todas as telas
- `src/app/app.routes.ts`: rotas do app, usando o **Angular Router** (rota vazia ou inválida volta para `/home`)
- `src/app/service-bolsas.ts`: serviço que usa o `HttpClient` para buscar as bolsas na API Flask (`http://localhost:5000/bolsas`)
- Uma pasta por tela, com o componente (`.ts`), o HTML, o CSS e o teste (`.spec.ts`)

A API usada pelo front está no repositório [Projeto_DoacaoDeSangue](https://github.com/franpietrobelli-creator/Projeto_DoacaoDeSangue).

## Como rodar

```bash
npm install
ng serve
```

Depois é só abrir `http://localhost:4200/`.

Outros comandos:
- `ng build`: gera a versão de produção na pasta `dist/`
- `ng test`: roda os testes unitários

Projeto gerado com o [Angular CLI](https://github.com/angular/angular-cli) 21.2.3.
