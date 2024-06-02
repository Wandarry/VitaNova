import { ImageBackground } from "@gluestack-ui/themed";

const SplashScreen = () => {
  return (
    <ImageBackground source={require("@/assets/images/logo.png")} flex={1} />
  );
};

export default SplashScreen;
