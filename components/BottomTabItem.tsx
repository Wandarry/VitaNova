import { Box, Text } from "@gluestack-ui/themed";
import { Home } from "./icons/home";
import { ComponentType } from "react";

type BottomTabItemProps = {
  focused: boolean;
  title: string;
  Icon: ComponentType<any>;
};

export const BottomTabItem = ({ focused, title, Icon }: BottomTabItemProps) => {
  return (
    <Box alignItems="center" paddingTop={12} gap={8}>
      <Icon
        style={{
          color: focused ? "#17376D" : "#3D3D3D",
          height: 24,
          width: 24,
        }}
      />
      <Text
        color={focused ? "#17376D" : "#3D3D3D"}
        fontSize={13}
        fontFamily={focused ? "Livvic_500" : "Livvic_400"}
      >
        {title}
      </Text>
    </Box>
  );
};
