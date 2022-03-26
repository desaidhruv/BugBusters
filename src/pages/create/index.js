import React from "react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import {
  VStack,
  Flex,
  Box,
  Button,
  Heading,
  Avatar,
  Text,
  Input,
  HStack,
  Image,
  Center,
  Spacer,
} from "@chakra-ui/react";
// import Profile from "../components/Profile";
// import About from "../components/About";
// import Links from "../components/Links";
// import { DarkModeSwitch } from "../components/DarkModeSwitch";

const steps = [
  {
    label: "Profile",
    jsx: "<Profile />",
    c: null,
  },
  {
    label: "About",
    jsx: "<About />",
    c: null,
  },
  {
    label: "Links",
    jsx: "<Links />",
    c: false,
  },
];

const image1 =
  "https://res.cloudinary.com/dbm7us31s/image/upload/v1643548927/digital%20card/form/Profile/Saly-14_tzdjim.svg";
const image2 =
  "https://res.cloudinary.com/dbm7us31s/image/upload/v1643823994/digital%20card/form/Saly-16_wvbxda.svg";
const image3 =
  "https://res.cloudinary.com/dbm7us31s/image/upload/v1643823979/digital%20card/form/Saly-15_1_zhlfjw.svg";

export default function Form() {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const ImgSrc =
    activeStep == 0
      ? image1
      : activeStep == 1
      ? image2
      : activeStep == 2
      ? image3
      : image1;

  // console.log(ImgSrc);

  return (
    <>
      {/* <DarkModeSwitch zIndex={5} /> */}
      <HStack h="100vh" bg={["white", "white", "#77C208"]}>
        <Image
          className="background"
          display={["none", "none", "flex"]}
          pl="100px"
          h="100vh"
          pos="absolute"
          src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643549357/digital%20card/form/Profile/Group_17_wu2yen.svg"
        />
        <Box
          display={["none", "none", "flex"]}
          pos="relative"
          h="full"
          w="40%"
          as={Flex}
          justifyContent="end"
          flexDirection="column"
        >
          <Box
            h="full"
            as={Flex}
            flexDirection="column"
            justifyContent="flex-end"
          >
            <Image
              h="95%"
              minHeight="90%"
              src={ImgSrc}
              // src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643548927/digital%20card/form/Profile/Saly-14_tzdjim.svg"
            />
          </Box>
        </Box>
        <Box zIndex="1" h="100%" as={Center} w={["100%", "100%", "60%"]}>
          <Box as={Center} w="70vh" h="90vh">
            <Box
              // border="2px solid red"
              as={Flex}
              flexDirection="column"
              justifyContent="space-evenly"
              p="10px"
              w="full"
              h="inherit"
              bg="white"
              boxShadow="8px 8px 24px 0px rgba(0, 0, 0, 0.1)"
              borderRadius="36px"
            >
              <Box
                css={{
                  "&::-webkit-scrollbar": {
                    overflow: "hidden",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-track": {
                    borderRadius: "10px",
                    backgroundColor: "white",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    borderRadius: "10px",
                    backgroundColor: "#77C208",
                  },
                }}
                w="100%"
                // border="2px solid red"
                h="full"
                overflow="auto"
              >
                <Text
                  fontSize={{ base: "30px", md: "34px", lg: "38px" }}
                  fontFamily="mono"
                  fontStyle="normal"
                  textAlign="center"
                  // mt="60%"
                  // border="2px solid red"
                  p="6% 0% 6% 0%"
                  // h="200px"
                >
                  Via Digital Card
                </Text>
                <Steps
                  p="20px 30px 0 30px"
                  responsive={false}
                  maxH="70px"
                  as={Box}
                  activeStep={activeStep}
                  labelOrientation="vertical"
                >
                  {steps.map(({ label, jsx, c }) => (
                    <Step label={label} key={label}>
                      {jsx}
                    </Step>
                  ))}
                </Steps>

                {/* </Box> */}
              </Box>
              {activeStep === steps.length ? (
                ""
              ) : (
                <Center p="10px 0px 10px 10px">
                  <Button px={10} onClick={nextStep}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Center>
              )}
            </Box>
          </Box>
        </Box>
      </HStack>
    </>
  );
}
