<div align=center>

<h3>

    register-using-steps

</h3>

![PRINTS](./public/register.gif)

</div>

## 📚 **Sobre**

Este projeto tem como objetivo explorar uma forma simples de criar formulários no formato stepper.

#### formato entrada:

```bash

    const modelo = [
      {
        active: true,

        fields: [
          {
            name: 'name',
            label: 'Nome',
            required: true,
            requiredMessage: 'Campo obrigatório', // opcional
          },
          {
            name: 'email',
            label: 'E-mail',
            required: true,
            requiredMessage: 'Campo obrigatório', // opcional
            customRegexValidation: '[a-z0-9]+@[a-z]+.[a-z]{2,3}', // opcional
            customRegexValidationMessage: 'E-mail inválido', // opcional
          },
          {
            name: 'phone',
            label: 'Telefone',
            required: false,
          },
        ],
      }
    ]

```

#### formato saída:

```bash
{
   name: 'Teste',
   email: 'teste@gmail.com',
   phone: '656565'
}

```

<br>
<br>

### 📌 **Tecnologias utilizadas**

- ReactJS
- Typescript
- Redux
- Styled Components
- Jest
- Testing Library

<br>

### 🔥 **Go live**

=> https://clever-swirles-86092a.netlify.app/

### 🚀 **Mão na massa**

```bash
# Clone este repositório
$ git clone https://github.com/felipepxavier/register-using-steps

# Acesse a pasta do projeto no terminal/cmd
$ cd register-using-steps

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

```
