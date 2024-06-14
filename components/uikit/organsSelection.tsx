import { Pressable, Text } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import { DonationInformationFormValues } from "@/app/(app)/pledge/donationInformation";

type OrganSelctionProps = {
  organName: string;
  isDisabled: boolean;
};

export const OrganSelection = ({
  organName,
  isDisabled,
}: OrganSelctionProps) => {
  const { values, setFieldValue } =
    useFormikContext<DonationInformationFormValues>();
  const [checked, setChecked] = useState(
    values.excludedOrgans.includes(organName),
  );

  useEffect(() => {
    setChecked(values.excludedOrgans.includes(organName));
  }, [values.excludedOrgans, organName]);

  const handlePress = () => {
    if (!isDisabled) {
      const newExcludedOrgans = checked
        ? values.excludedOrgans.filter((organ: string) => organ !== organName) // Retire l'organe de la liste exclue
        : [...values.excludedOrgans, organName]; // Ajoute l'organe à la liste exclue
      setFieldValue("excludedOrgans", newExcludedOrgans);
      setChecked(!checked);
    }
  };
  return (
    <Pressable
      px={14}
      py={8}
      borderRadius="$full"
      bgColor={checked ? "$primaryNormal" : "$primaryLight"}
      onPress={handlePress}
    >
      <Text color={checked ? "$white" : "$black"}>{organName}</Text>
    </Pressable>
  );
};
