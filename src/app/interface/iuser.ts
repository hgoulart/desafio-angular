export interface IUser  {
    id: number,
    cpf: string,
    nome: string,
    situacaoCPF: [
      { id: number, status: string}
    ],
    contas: any
  }

//   {
//     id: 1,
//     tipo: [
//       { id: 1, tipo: 'Conta Aplicação' }
//     ],
//     contaNumero: '557932-4'
//   },
  // {
  //   id: 2,
  //   tipo: [
  //     { id: 2, tipo: 'Conta Corrente' }
  //   ],
  //   contaNumero: '778461-8'
  // }

// situacaoCPF: [
//     { id: 1, status: 'Regular'}
//   ],