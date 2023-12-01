import * as yup from "yup";

export const updateRelativeSchema = yup.object().shape({
  name: yup.string(),

  cpf: yup.string(),

  email: yup
    .string()
    .email("Digite um e-mail válido")
});

export const formFields = [
  {
    name: "name",
    placeholder: "Nome",
  },
  {
    name: "cpf",
    placeholder: "CPF",
  },
  {
    name: "email",
    placeholder: "E-mail",
  },
];
