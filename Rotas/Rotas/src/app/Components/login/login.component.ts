import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    onSubmit(myForm: NgForm) {
      console.log("passou aqui")
      if (myForm.value.nome == 'admin' && myForm.value.password == '123'){
        alert("Logado com sucesso!")
      }
      else{
        alert("Usuário ou senha inválido")
      }

    }



}
