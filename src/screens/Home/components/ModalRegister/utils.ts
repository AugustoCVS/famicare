import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),

  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),

  password: yup
    .string()
    .required("A senha é obrigatória")
    .test("password", "Senha inválida", function (value) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(value);
    }),

  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
    .required("A confirmação de senha é obrigatória"),
});

export const formFields = [
  {
    name: "name",
    placeholder: "Nome",
  },
  {
    name: "email",
    placeholder: "E-mail",
  },
  {
    name: "password",
    placeholder: "Senha",
  },
  {
    name: "confirm_password",
    placeholder: "Confirmar Senha",
  },
];
