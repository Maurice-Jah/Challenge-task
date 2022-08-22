import { Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <div className="Header">
      <Text
        as="h1"
        fontSize="36px"
        lineHeight="50px"
        color="#4E598C"
        paddingTop="189px"
        mb="59px"
      >
        Complete your Purchase
      </Text>

      <Flex
        color="#BDBDBD"
        fontSize="24px"
        lineHeight="34px"
        borderBottom="1px solid #000"
        mb="76px"
      >
        <Text mr="95px" pb="27px" className=" active active-tab">
          Personal Info
        </Text>
        <Text mr="130px" pb="27px" >
          Billing Info
        </Text>
        <Text pb="27px">Confirm Payment</Text>
      </Flex>
    </div>
  );
};

export default Header;
