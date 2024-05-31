import { HStack } from "@gluestack-ui/themed";
import { OrganSelection } from "./organsSelection";

type DoNotTouchOrganProps = {
  isDisabled: boolean;
};

export const DoNotTouchOrgan = ({ isDisabled }: DoNotTouchOrganProps) => {
  return (
    <HStack
      flexWrap="wrap"
      rowGap={16}
      columnGap={16}
      opacity={isDisabled ? "$50" : "$100"}
    >
      <OrganSelection organName="Reins" isDisabled={isDisabled} />
      <OrganSelection organName="Poumons" isDisabled={isDisabled} />
      <OrganSelection organName="Pancréas" isDisabled={isDisabled} />
      <OrganSelection organName="Cornées" isDisabled={isDisabled} />
      <OrganSelection organName="Moelle osseuse" isDisabled={isDisabled} />
      <OrganSelection organName="Peau" isDisabled={isDisabled} />
      <OrganSelection organName="Os" isDisabled={isDisabled} />
      <OrganSelection organName="Intestins" isDisabled={isDisabled} />
      <OrganSelection organName="Tendons" isDisabled={isDisabled} />
      <OrganSelection organName="Valves cardiaque" isDisabled={isDisabled} />
      <OrganSelection organName="Cellules souches" isDisabled={isDisabled} />
      <OrganSelection organName="Foie" isDisabled={isDisabled} />
      <OrganSelection organName="Cœur" isDisabled={isDisabled} />
      <OrganSelection organName="Ligaments" isDisabled={isDisabled} />
      <OrganSelection organName="Cartillages" isDisabled={isDisabled} />
    </HStack>
  );
};
