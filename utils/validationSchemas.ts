import { object, string, date, ref, boolean } from "yup";
import {
  requiredFieldMessage,
  mustBeAEmailAddress,
  passwordRequirementMsg,
} from "@/constants/message";
import { isValidPhoneNumber } from "libphonenumber-js";

export const passwordRegex =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

export const phoneNumberValidator = string()
  .required(requiredFieldMessage)
  .test(
    "check-phone-number",
    "Ajoutez un numéro de téléphone valide",
    (value) => !!(value && isValidPhoneNumber(value)),
  );

const fieldRequiredMessage = string().required(requiredFieldMessage);

export const loginValidationSchema = object({
  email: string().required(requiredFieldMessage).email(mustBeAEmailAddress),
  password: string()
    .required(requiredFieldMessage)
    .matches(new RegExp(passwordRegex), passwordRequirementMsg),
});

export const registerValidationSchemaFirstForm = object({
  firstNames: fieldRequiredMessage,
  lastName: fieldRequiredMessage,
});

export const registerValidationSchemaSecondForm = object({
  phoneNumber: phoneNumberValidator,
  birthDate: date().required(requiredFieldMessage),
});

export const registerValidationSchemaThirdForm = object({
  email: fieldRequiredMessage.email(mustBeAEmailAddress),
  password: fieldRequiredMessage.matches(
    new RegExp(passwordRegex),
    passwordRequirementMsg,
  ),
  confirmPassword: fieldRequiredMessage.oneOf(
    [ref("password")],
    "Entrez le même mot de passe que le premier champ",
  ),
  acceptTermOfUse: boolean(),
});

export const personalInformationValidationSchema = object({
  fullName: fieldRequiredMessage,
  personalNumberIdentification: fieldRequiredMessage,
  birthDate: date().required(requiredFieldMessage),
  phoneNumber: phoneNumberValidator,
  email: fieldRequiredMessage.email(mustBeAEmailAddress),
  address: fieldRequiredMessage,
});

export const medicalInformationValidationSchema = object({
  medicalHistory: fieldRequiredMessage,
});

export const emergencyContactValidationSchema = object({
  emergencyContactName: fieldRequiredMessage,
  phoneNumber: phoneNumberValidator,
  address: fieldRequiredMessage,
});
