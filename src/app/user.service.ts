import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './interface/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_url: string = 'http://localhost/monitoramento-api/';

  constructor(private http: HttpClient) { }


  get(url: any) {
    return this.http.get(this.API_url+url);

  }

  post(url: any, data: any): Observable<IUser> {
    return this.http.post<IUser>(this.API_url + url, data);
  }

  // como não há api para retorno criei um método com dados mockados
  findUserByCpf(cpf: string) {

    const users = [
      {
        id: 1,
        cpf: '11122233344',
        nome: 'Mariane de Souza Oliveira',
        step: 1,
        situacaoCPF: [
          { id: 1, status: 'Regular' }
        ],
        contas: [
          {
            id: 1,
            tipo: [
              { id: 1, tipo: 'Conta Aplicação' }
            ],
            contaNumero: '557932-4'
          },
          {
            id: 2,
            tipo: [
              { id: 2, tipo: 'Conta Corrente' }
            ],
            contaNumero: '778461-8'
          }
        ]
      },
      {
        id: 2,
        cpf: '05715224080',
        nome: 'Antônio da Silva Mendes',
        step: 2,
        situacaoCPF: [
          { id: 1, status: 'Regular' }
        ],
        contas: [
          {
            id: 2,
            tipo: [
              { id: 1, tipo: 'Conta Aplicação' }
            ],
            contaNumero: '363647-4'
          },
          {
            id: 3,
            tipo: [
              { id: 2, tipo: 'Conta Corrente' }
            ],
            contaNumero: '778435-8'
          }
        ]
      },
      {
        id: 3,
        cpf: '18224121020',
        nome: 'Silvia da Costa Trindade',
        step: 1,
        situacaoCPF: [
          { id: 1, status: 'Regular' }
        ],
        contas: [
          {
            id: 4,
            tipo: [
              { id: 1, tipo: 'Conta Aplicação' }
            ],
            contaNumero: '254632-8'
          },
          {
            id: 5,
            tipo: [
              { id: 2, tipo: 'Conta Corrente' }
            ],
            contaNumero: '123123-2'
          }
        ]
      },
    ];
    var obj = users.filter(function (node) {
      return node.cpf == cpf;
    });

    return obj;
  }
}
