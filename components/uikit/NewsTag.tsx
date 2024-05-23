import { Box, Text } from "@gluestack-ui/themed";

export type NewsTagProps = {
  title: string;
  style: "card" | "detail";
};

const cardStyle = {
  bgColor: "$white",
  color: "$primaryNormal",
};
const detailStyle = {
  bgColor: "$primaryNormal",
  color: "$white",
};

export const NewsTag = ({ title, style }: NewsTagProps) => {
  const selectedStyle = style === "card" ? cardStyle : detailStyle;
  return (
    <Box
      bgColor={selectedStyle.bgColor}
      borderColor="$primaryNormal"
      px="$2"
      py="$1.5"
      borderRadius="$lg"
      alignItems="center"
      justifyContent="center"
    >
      <Text color={selectedStyle.color} fontWeight="$semibold" fontSize="$md">
        {title}
      </Text>
    </Box>
  );
};
