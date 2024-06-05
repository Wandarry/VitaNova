import React from "react";
import {
  Box,
  Text,
  Icon,
  CheckCircleIcon,
  CircleIcon,
} from "@gluestack-ui/themed";
import { LinkButton } from "./uikit/Buttons/LinkButton";
import { router } from "expo-router";
import { Routes } from "@/constants/route";

const steps = [
  {
    id: 1,
    title: "Informations personnelles",
    description: "Informations nécessaires sur le potentiel donneur",
    active: true,
    route: Routes.PERSONAL_INFORMATION,
  },
  {
    id: 2,
    title: "Informations sur le don",
    description: "Spécification des organes et tissus à donner",
    active: false,
    route: Routes.DONATION_INFORMATION,
  },
  {
    id: 3,
    title: "Contact d'urgence",
    description: "Personne à contacter en cas d'urgence",
    active: false,
    route: Routes.EMERGENCY_CONTACT,
  },
  {
    id: 4,
    title: "Informations médicales",
    description: "Antécédents médicaux pertinents pour l'éligibilité",
    active: false,
    route: Routes.MEDICAL_INFORMATION,
  },
];

const activeBox = {
  bgColor: "$primaryNormal",
  padding: 16,
  gap: 12,
  minHeight: "30%",
  justifyContent: "center",
  color: "$white",
  borderRadius: 18,
};

const inactiveBox = {
  bgColor: "$textLight0",
  padding: 16,
  gap: 10,
  justifyContent: "center",
  color: "$primaryNormal",
  borderRadius: 0,
};

export const StepIndicator = () => {
  return (
    <Box>
      {steps.map((step, index) => {
        const style = step.active ? activeBox : inactiveBox;
        return (
          <Box
            key={step.id}
            flexDirection="row"
            alignItems="flex-start"
            marginBottom={16}
          >
            <Box alignItems="center" marginRight={16}>
              <Icon
                as={step.active ? CircleIcon : CheckCircleIcon}
                color="$primaryNormal"
              />
              {index < steps.length - 1 && (
                <Box
                  h={step.active ? 180 : 70}
                  w={2}
                  bgColor="$primaryNormal"
                  my={8}
                />
              )}
            </Box>
            <Box
              bgColor={style.bgColor}
              padding={style.padding}
              gap={style.gap}
              borderRadius={style.borderRadius}
            >
              <Text fontFamily="Livvic_600" fontSize={22} color={style.color}>
                {step.title}
              </Text>
              <Text fontFamily="Livvic_400" fontSize={18} color={style.color}>
                {step.description}
              </Text>
              {step.active ? (
                <LinkButton
                  title="Commencer"
                  withIcon={true}
                  isDisabled={false}
                  iconColor="$white"
                  onpress={() => router.navigate(step.route)}
                />
              ) : null}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};