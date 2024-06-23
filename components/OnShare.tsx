import { Share } from "react-native";

export const OnShare = async () => {
  try {
    await Share.share({
      title: "Consentement au don d'organes sur VitaNova",
      message:
        "J'ai enregistré mon consentement pour le don d'organes. En partageant cette carte, je souhaite vous informer de ma décision et vous encourager à en discuter. Ensemble, nous pouvons sauver des vies. https://vitanova-66a14.firebaseapp.com/donorCard.png",
      url: "https://vitanova-66a14.firebaseapp.com/donorCard.png",
    });
  } catch (err) {
    // handle errors
  }
};
