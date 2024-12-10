import { Button, Grid2, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { transacao } from "../store/modules/counterSlice";
import { useState } from "react";

export function Home() {
  const financeiroRedux = useAppSelector((state) => state.financeiro); // useAppSelector = pega o valor da store

  const dispatch = useAppDispatch(); // useAppDispatch = dispara as funções (incrementar/decrementar...)

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState<number>(0);
  const [type, setType] = useState<"entrada" | "saida">("entrada");

  // setDescricao: É uma função que permite atualizar o valor da variável descricao, ele re-renderiza o componente para refletir as alterações

  // useState(""): Define o estado inicial como uma string vazia (""), já que inicialmente não há descrição preenchida

  // Função para registrar uma transação
  function handleRegistrar() {
    if (!descricao || valor <= 0) {
      alert("Preencha todos os campos!");
      return;
    }

    dispatch(
      transacao({
        type: type,
        descricao: descricao,
        value: valor,
      })
    );

    setDescricao(""); // Limpa o campo descrição
    setValor(0); // Limpa o campo valor
  }

  // Função para calcular saldo total
  function calcularSaldo() {
    let saldo = 0;

    financeiroRedux.transacoes.forEach((transacao) => {
      if (transacao.type === "entrada") {
        saldo += transacao.value;
      } else {
        saldo -= transacao.value;
      }
    });
    return saldo;
  }

  return (
    <Grid2 container spacing={2} sx={{ textAlign: "center" }}>
      {/* TÍTULO */}
      <Grid2 size={12}>
        <Typography variant="h4">Registro de Transações</Typography>
      </Grid2>

      {/* DESCRIÇÃO */}
      <Grid2 size={12}>
        <TextField
          label="Descrição"
          variant="standard"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)} // Atualiza o estado quando o usuário digita
        />

        {/* 
        onChange = É um manipulador de eventos, acionado toda vez que o valor de um campo de entrada (<input>, <textarea>, etc.) muda. 
        
        e = objeto do evento
        
        e.target = elemento DOM que disparou o evento

        e.target.value = valor atual do campo de entrada
        */}
      </Grid2>

      {/* VALOR */}
      <Grid2 size={12}>
        <TextField
          label="Valor"
          variant="standard"
          value={valor}
          onChange={(e) => setValor(parseFloat(e.target.value))}
        />
        {/* 
        parseFloat = converte uma string em um número decimal)
        */}
      </Grid2>

      {/* TIPO ENTRADA */}
      <Grid2 size={12}>
        <Button
          variant={type === "entrada" ? "contained" : "outlined"} // Ternário
          color="success"
          onClick={() => setType("entrada")}
        >
          Entrada
        </Button>

        <Button
          variant={type === "saida" ? "contained" : "outlined"} // Ternário
          color="secondary"
          onClick={() => setType("saida")}
        >
          Saída
        </Button>
      </Grid2>

      {/* REGISTRAR */}
      <Grid2 size={12}>
        <Button variant="contained" onClick={handleRegistrar}>
          Registrar
        </Button>
      </Grid2>

      {/* SALDO TOTAL */}
      <Grid2 size={12}>
        <Typography variant="h4">Saldo: R$ {calcularSaldo()}</Typography>
      </Grid2>

      {/* LISTA DE REGISTROS */}
      <Grid2 size={12}>
        <Typography variant="h5">Transações</Typography>

        {financeiroRedux.transacoes.length > 0 ? (
          financeiroRedux.transacoes.map((transacao, index) => {
            let tipoTransacao = "";
            if (transacao.type === "entrada") {
              tipoTransacao = "Entrada:";
            } else {
              tipoTransacao = "Saída:";
            }

            return (
              <Typography key={index}>
                {tipoTransacao} R$ {transacao.value} | Descrição:{" "}
                {transacao.descricao}
              </Typography>
            );
          })
        ) : (
          <Typography>Nenhuma transação registrada.</Typography>
        )}
      </Grid2>
    </Grid2>
  );
}

