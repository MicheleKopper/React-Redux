import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Funcionalidades da Aplicação

// - Registro de Transações: Os usuários podem cadastrar transações de entrada ou saída, incluindo uma descrição e o valor da transação.

// - Listagem de Transações: A aplicação mostrará uma lista de transações separada em entradas e saídas, exibindo detalhes como a descrição e o valor.

// - Cálculo do Saldo: A aplicação deve calcular automaticamente o saldo atual da conta, considerando todas as transações registradas.

// - Estados Globais com Redux: Redux será usado para gerenciar o estado global da aplicação, permitindo que diferentes
// componentes acessem e atualizem as informações de transações e saldo.

// Interface para cada funcionalidade

interface Transacao {
  type: "entrada" | "saida";
  descricao: string;
  value: number;
}

interface InitialState {
  saldo: number;
  transacoes: Transacao[];
}

const initialState: InitialState = {
  saldo: 0,
  transacoes: [],
};

const counterSlice = createSlice({
  name: "financeiro",
  initialState: initialState,
  reducers: {
    transacao: (state, action: PayloadAction<Transacao>) => {
      state.transacoes.push(action.payload);

      if (action.payload.type === "entrada") {
        state.saldo += action.payload.value;
      } else {
        state.saldo -= action.payload.value;
      }
    },
    reset() {
      return initialState;
    },
  },
});

export const { transacao, reset } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;



// interface InitialState {
//   value: number;
// }
// const initialState: InitialState = {
//   value: 10,
// };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialState,
//   reducers: {
//     incrementar: (state) => {
//       state.value += 1;
//       return state;
//     },
//     decrementar(state) {
//       state.value -= 1;
//       return state;
//     },
//     reset() {
//       return initialState;
//     },
//   },
// });

// export const { decrementar, incrementar, reset } = counterSlice.actions;
// export const counterReducer = counterSlice.reducer;

// Nome
// Valor inicial (value)
// Actions (functions) incrementar, decrementar
