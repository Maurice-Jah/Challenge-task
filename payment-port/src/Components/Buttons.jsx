import { Text, Button, HStack } from "@chakra-ui/react";

const Buttons = ({ title }) => {
  return (
    <div>
      <HStack mb={"111px"}>
        <Button
          bgGradient="linear-gradient(180deg, #f2c94c 0%, #f2994a 100%)"
          color="#F7F7FF"
          paddingInline="97px"
          paddingBlock="14px"
          lineHeight={"30px"}
          fontSize="20px"
          borderRadius="10px"
          mr={"84px"}
          _hover={{
            background: "linear-gradient(180deg, #f2c94c 0%, #f2994a 100%)",
          }}
        >
          {title}
        </Button>

        <Text
          color="#4E598C"
          lineHeight={"30px"}
          fontSize="20px"
          cursor="pointer"
        >
          Cancel Payment
        </Text>
      </HStack>
    </div>
  );
};

export default Buttons;
