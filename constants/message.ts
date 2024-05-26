import { string } from "yup";
import { isValidPhoneNumber } from "libphonenumber-js";

export const requiredFieldMessage = "Ce champs est requis";
export const mustBeAEmailAdress = "Ajoutez une adresse mail valide";
export const passwordRequirementMsg =
  "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et l'un des caractères spéciaux suivants @$!%*?&.";

export const passwordRegex =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

export const phoneNumberValidator = string()
  .required(requiredFieldMessage)
  .test(
    "Ajoutez un numéro de téléphone valide",
    (value) => !!(value && isValidPhoneNumber(value)),
  );
