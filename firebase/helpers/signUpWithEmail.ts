import firebaseAuth from "../auth";
import { showToast } from "@/helpers/showToast";
import { markAsAlreadyOnboard } from "../../utils/alreadyOnboard";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";

const getAuthErrorMessage = (err: FirebaseError): string => {
  switch (err.code) {
    case AuthErrorCodes.EMAIL_EXISTS:
      return "Adresse mail déjà utilisée";
    case AuthErrorCodes.INVALID_LOGIN_CREDENTIALS:
      return "Informations d'identification invalides";
    case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
      return "Trop d'essais, réessayez plus tard";
    case AuthErrorCodes.CREDENTIAL_ALREADY_IN_USE:
      return "Informations d'identification déjà utilisées";
    case AuthErrorCodes.INVALID_EMAIL:
      return "Email invalide";
    case AuthErrorCodes.INVALID_PASSWORD:
      return "Mot de passe invalide";
    case AuthErrorCodes.INVALID_PHONE_NUMBER:
      return "Numéro de téléphone invalide";
    default:
      return "Une erreur s'est produite";
  }
};

export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );

    showToast({
      title: "Bienvenue sur VitaNova",
      description: "Votre compte est créé avec succès",
      type: "success",
    });

    markAsAlreadyOnboard();

    return userCredential;
  } catch (e) {
    const error = e as FirebaseError;

    const message = getAuthErrorMessage(error);

    showToast({
      title: "Erreur",
      description: message,
      type: "error",
    });
  }
};
