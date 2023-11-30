import * as yup from "yup";

export const signInRelativeSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),

  password: yup
    .string()
    .required("A senha é obrigatória")
});
