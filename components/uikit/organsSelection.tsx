import { Pressable, Text } from "@gluestack-ui/themed";
import { useState } from "react";

type OrganSelctionProps = {
  organName: string;
  isDisabled: boolean;
};

export const OrganSelection = ({
  organName,
  isDisabled,
}: OrganSelctionProps) => {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    if (!isDisabled) {
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
