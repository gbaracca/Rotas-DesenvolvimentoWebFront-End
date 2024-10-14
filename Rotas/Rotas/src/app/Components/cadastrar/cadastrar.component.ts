import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {

  user = {
    name: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid && this.user.password == this.user.confirmPassword) {
       alert("Formulario enviado " + this.user.name)
      // Aqui você pode adicionar lógica para enviar os dados para um serviço ou API.
      // Por exemplo: this.userService.register(this.user).subscribe(...);
    }

    else{
      alert("Formulario não enviado! Por favor, preencha os campos corretamente")
    }

  }

}
