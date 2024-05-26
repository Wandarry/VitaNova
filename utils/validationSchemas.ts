import { object, string, date, ref } from "yup";
import {
  requiredFieldMessage,
  mustBeAEmailAdress,
  passwordRequirementMsg,
  passwordRegex,
  phoneNumberValidator,
} from "@/constants/message";

const fieldRequiredMessage = string().required(requiredFieldMessage);

export const loginValidationSchema = object({
  email: string().required(requiredFieldMessage).email(mustBeAEmailAdress),
  password: string()
    .required(requiredFieldMessage)
    .matches(new RegExp(passwordRegex), passwordRequirementMsg),
});

export const registerValidationSchema = object({
  firstNames: fieldRequiredMessage,
  lastName: fieldRequiredMessage,
  birthDate: date().required(requiredFieldMessage),
  email: fieldRequiredMessage.email(mustBeAEmailAdress),
  phoneNumber: phoneNumberValidator,
  password: fieldRequiredMessage.matches(
    new RegExp(passwordRegex),
    passwordRequirementMsg,
  ),
  confirmPassword: fieldRequiredMessage.oneOf(
    [ref("password")],
    "Entrez le même mot de passe que le premier champ",
  ),
});
