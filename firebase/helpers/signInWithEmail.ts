import firebaseAuth from "../auth";
import { showToast } from "@/helpers/showToast";
import { markAsAlreadyOnboard } from "@/utils/alreadyOnboard";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";

const getAuthErrorMessage = (err: FirebaseError): string => {
  switch (err.code) {
    case AuthErrorCodes.INVALID_LOGIN_CREDENTIALS:
      return "Informations d'identification invalides";
    case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
      return "Trop d'essais, réessayez plus tard";
    case AuthErrorCodes.ADMIN_ONLY_OPERATION:
      return "Cette fonctionnalité est celle de l'admin uniquement";
    case AuthErrorCodes.CODE_EXPIRED:
      return "Votre code a expiré";
    case AuthErrorCodes.UNVERIFIED_EMAIL:
      return "E-mail non vérifié";
    case AuthErrorCodes.TOKEN_EXPIRED:
      return "Votre session a expiré";
    case AuthErrorCodes.CREDENTIAL_MISMATCH:
      return "Votre email ou votre mot de passe est incohent aux informations de votre compte";
    case AuthErrorCodes.INVALID_CODE:
      return "Code invalide";
    case AuthErrorCodes.INVALID_EMAIL:
      return "Email invalide";
    case AuthErrorCodes.INVALID_PASSWORD:
      return "Mot de passe invalide";
    case AuthErrorCodes.USER_DELETED:
      return "Votre compte est introuvable";
    case AuthErrorCodes.WEAK_PASSWORD:
      return "Mot de passe faible";
    default:
      return "Une erreur s'est produite";
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  try {
    // call firebase for sign in
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );

    // show sucess toast
    showToast({
      title: "Bon retour sur VitaNova",
      description: "Vous êtes connecté avec succès !",
      type: "success",
    });

    markAsAlreadyOnboard();

    return userCredential;
  } catch (e) {
    const error = e as FirebaseError;

    const message = getAuthErrorMessage(error);

    // show error toast
    showToast({
      title: "Erreur",
      description: message,
      type: "error",
    });
  }
};
