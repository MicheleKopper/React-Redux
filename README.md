## Atividade Redux

A aplicação é um site de controle de dinheiro que permite o registro de transações de entrada e saída, exibe a lista de entradas e saídas, e apresenta o saldo atual da conta.

![01](src/assets/registro%20de%20transacoes.jpg)

## Setup - Redux

01 - Sazer setup do React - MUI Material

02 - Instalar o redux toolkit

```bash
npm install @reduxjs/toolkit
```

03 - Instalar o react redux

```bash
npm install react-redux
```

04 - Dentro de `src` criar uma pasta chamada `store`

05 - Dentrp de `store` criar um arquivo chamado `index.ts`. Colar o código abaixo:

```bash
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

export type Store = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
```

06 - Dentro de `store` rriar o arquivo `hooks.ts`. Colar o código abaixo:

```bash
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, Store } from ".";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<Store>();
```

07 - Dentro de `store` criar a pasta `modules`

08 - Dentro de `modules` criar o arquivo `counterSlice.ts`

## Sobre o Redux Toolkit

O Redux Toolkit fornece tipos que cobrem todos os aspectos do gerenciamento de estado, como:

- Configuração da store (EnhancedStore, Middleware, PreloadedState)
- Criação de slices (Slice, CaseReducer, PayloadAction)
- Operações assíncronas (AsyncThunk, ThunkAPI)
- Manipulação de ações e estados (Action, Reducer, Dispatch)
