import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { IUser } from '../../interface/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  step = 0;
  cpf = '';
  user: any;
  isOpen: any = {
    title: '',
    subtitle: '',
    isOpen: false,
    step: 0
  };
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  searchCPF(cpfValue: any){
    this.cpf = cpfValue;

    let userTemp = this.userService.findUserByCpf(this.cpf);
    this.user = userTemp[0];
    // a validação depende do retorno da api, aqui fiz uma simples
    if(this.user){
      this.step = this.user.step;
    }else{
      this.step = 0;
      this.isOpen = {
        title: 'CPF não encontrado no sistema',
        subtitle: 'Utilize outro CPF',
        isOpen: true
      }
    }

    // se fosse feito busca em api
    // let url = 'searchUserByCpf';

    // this.userService.post(url, {cpf: this.cpf}).subscribe(result => {
    //   this.user = result;
    // })
  }
}
