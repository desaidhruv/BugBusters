import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import NextLink from "next/link";
import {
  Flex,
  Text,
  Box,
  HStack,
  Image,
  Input,
  InputGroup,
  Link,
  InputRightElement,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  useColorModeValue,
  Center,
  VStack,
  Container,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { DarkModeSwitch } from "../DarkModeSwitch";
// import Mail from "../../pages/api/mail";

export const SignIn = (props) => {
  const [show, setShow] = React.useState(false);
  const [Loading, setLoading] = useState(false);
  const handleClick = () => setShow(!show);
  const { data: session, token } = useSession();
  console.log(token);
  const router = useRouter();
  const color = useColorModeValue("white", "#302E2E");
  const textColor = useColorModeValue("gray.800", "white");
  const [errorMessage, seterrorMessage] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter Valid Email").required("Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters"
        // , One Uppercase, One Lowercase, One Number and One Special Case Character
      )
      .required("Required"),
  });

  async function resetpassword() {
    // Mail.forgotPasswordEmail("sharmarahul1729@gmail.com").then((response) => {
    //   if (response.data.status === "200") {
    //     console.log("Done");
    //   } else {
    //     console.log("not done");
    //   }
    // });
    router.replace("/reset?token=hakjb");
    // props.navigation.navigate("/reset");
  }

  async function handleSubmit(values) {
    if (!session) {
      try {
        setLoading(true);
        const result = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });
        router.replace("/");
        setLoading(false);

        if (result.error) {
          console.log(result.error);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      router.push("/");
    }
  }
  return (
    <>
      <DarkModeSwitch />
      <Flex
        bg={color}
        as={Center}
        justifyContent="space-evenly"
        w="full"
        h="100vh"
      >
        <VStack as={Center} px="80px">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="bold"
          >
            ConstructW
          </Text>
          <Text
            fontSize={{ base: "36px", md: "40px", lg: "45px" }}
            py={5}
            fontFamily="mono"
            fontWeight="normal"
            color={textColor}
          >
            Project Owner
          </Text>
          <Flex>
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          (form.errors.email && form.touched.email) ||
                          errorMessage
                        }
                      >
                        <Input
                          placeholder="Enter email address"
                          mt="20px"
                          id="email"
                          h={["50px", "50px", "60px"]}
                          w={["300px", "300px", "400px"]}
                          size="lg"
                          variant="outline"
                          {...field}
                          color={textColor}
                        />
                        <FormErrorMessage>
                          {form.errors.email || errorMessage}{" "}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          (form.errors.password && form.touched.password) ||
                          errorMessage
                        }
                      >
                        <InputGroup
                          size="lg"
                          w={["300px", "300px", "400px"]}
                          mt="20px"
                        >
                          <Input
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Password"
                            id="password"
                            h={["50px", "50px", "60px"]}
                            variant="outline"
                            {...field}
                            color={textColor}
                          />
                          <InputRightElement
                            h={["50px", "50px", "60px"]}
                            width="4.5rem"
                          >
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                              {show ? "Hide" : "Show"}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>
                          {form.errors.password || errorMessage}{" "}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Center>
                    <Button
                      type="submit"
                      h={"50px"}
                      fontSize="20px"
                      isLoading={Loading}
                      w={["300px", "300px", "380px"]}
                      mt="30px"
                    >
                      Sign In
                    </Button>
                  </Center>
                </Form>
              )}
            </Formik>
          </Flex>
          <Flex direction="row" py="40px">
            <Text fontWeight="light" color={textColor}>
              Not a member ?
            </Text>
            <NextLink href="/auth/signup" passHref>
              <Link fontWeight="bold" px={2} color="Highlight">
                Create account now
              </Link>
            </NextLink>
          </Flex>
        </VStack>
        <Flex display={["none", "none", "flex"]}>
          <Image
            w="full"
            py="10px"
            h="100vh"
            src="https://res.cloudinary.com/dbm7us31s/image/upload/v1643225745/digital%20card/SignUp/Mask_Group_1_h4nweo.svg"
          />
        </Flex>
      </Flex>
    </>
  );
};
