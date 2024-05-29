import { Box, Text, Progress, ProgressFilledTrack } from "@gluestack-ui/themed";
import { RegisterStep1 } from "@/components/registerSteps/step1";
import { RegisterStep2 } from "@/components/registerSteps/step2";
import { RegisterStep3 } from "@/components/registerSteps/step3";
import { BackIconButton } from "@/components/uikit/Buttons/BackIconButton";
import { signUpWithEmail } from "@/firebase/helpers/signUpWithEmail";
import { useState } from "react";
import { showToast } from "@/helpers/showToast";

export interface RegisterFormsValue {
  firsName?: string;
  lastName?: string;
  phoneNumber?: string;
  birthDate?: string;
  email?: string;
  password?: string;
}

export default function Register() {
  const [step, setStep] = useState(1);

  const [inputs, setInputs] = useState<RegisterFormsValue>({});

  const previousForm = () => {
    setStep(step - 1);
  };

  const nextForm = () => {
    setStep(step + 1);
  };

  const handleFormStepSubmission = (stepValues: RegisterFormsValue) => {
    const newsInputs = { ...inputs, ...stepValues };

    setInputs(newsInputs);

    nextForm();
  };

  const handleRegister = (stepValues: RegisterFormsValue) => {
    const newsInputs = { ...inputs, ...stepValues };
    setInputs(newsInputs);
    if (stepValues.email && stepValues.password) {
      signUpWithEmail(stepValues.email, stepValues.password);
    } else {
      showToast({
        title: "Error",
        description: "Email et/ou password invalide",
        type: "error",
      });
    }
  };

  const getProgressValue = () => {
    return step * (100 / 3);
  };

  return (
    <Box flex={1}>
      <Box
        h={250}
        px={25}
        bgColor="$primaryLight"
        gap="$3.5"
        paddingBottom="$2"
        justifyContent="flex-end"
      >
        {step > 1 ? (
          <Box position="absolute" top={50} left={25} zIndex={100}>
            <BackIconButton
              isDisabled={false}
              bgColor="$white"
              iconColor="$primaryNormal"
              onPress={previousForm}
            />
          </Box>
        ) : null}
        <Text w={"75%"} color="$black" fontSize={25} fontWeight="$semibold">
          Bienvenue sur{" "}
          <Text color="$primaryNormal" fontSize={25} fontWeight="$semibold">
            VitaNova
          </Text>
        </Text>
        <Text color="$black" fontSize="$lg">
          Devenir un héros de l'ombre ? C'est facile, mais d'abord, créons votre
          compte !
        </Text>
      </Box>
      <Progress
        value={getProgressValue()}
        w={"100%"}
        size="xs"
        bgColor="$primaryLight"
      >
        <ProgressFilledTrack bgColor="#8A9DBC" />
      </Progress>
      {step === 1 ? (
        <RegisterStep1 onSubmit={handleFormStepSubmission} />
      ) : step === 2 ? (
        <RegisterStep2 onSubmit={handleFormStepSubmission} />
      ) : (
        <RegisterStep3 onSubmit={handleRegister} />
      )}
    </Box>
  );
}
