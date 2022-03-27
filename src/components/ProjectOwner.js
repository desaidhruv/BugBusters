import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Text,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  FormLabel,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  TableCaption,
  useDisclosure,
  FormControl,
  Input,
  Link,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";

import { getSession, signOut, useSession } from "next-auth/react";
import GetDataContext from "../context/Data";
// import ProjectOwner from "../components/ProjectOwner";

export default function ProjectOwner() {
  const [newContractor, setContractor] = useState({
    contractor: "",
    estimatedDuration: "",
    location: "",
    owner: "",
  });

  const {
    isOpen: isOpenNormal,
    onOpen: onOpenNormal,
    onClose: onCloseNormal,
  } = useDisclosure();

  const value = useContext(GetDataContext);
  const [constructorSignup, setconstructorSignup] = useState(
    value.data.contractorSignUp
  );
  const [projectDetails, setprojectDetails] = useState(
    value.data.projectDetails
  );

  console.log(projectDetails);
  // const handleChange = (e) => {
  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // };
  function handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setContractor({ ...newContractor, [name]: value });
    // console.log("newConstructor", newConstructor);

    // console.log("newConstructor", newConstructor);

    // setprojectDetails({ ...projectDetails, [name]: value });
  }

  function handleSubmit() {
    console.log("newConstructor", newContractor);
    const addData = [newContractor];
    console.log(addData);
    setprojectDetails([...projectDetails, newContractor]);
    // setprojectDetails([ newConstructor]);
    // console.log("projectDetails", projectDetails);
    // onClose();
  }
  const handleRemoveItem = (e) => {
    const name = e;
    setprojectDetails(projectDetails.filter((item) => item.name !== name));
  };

  function handleEditc() {}
  return (
    <>
      <Modal isOpen={isOpenNormal} onClose={onCloseNormal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Project</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            {" "}
            {/* <Box w="300px" h="400px" p="30px"> */}
            <FormControl onChange={(e) => handleChange(e)}>
              <FormLabel htmlFor="name">Contractor Name</FormLabel>
              <Input name="contractor" mb="10px" type="text" />
              <FormLabel htmlFor="name"> Name</FormLabel>
              <Input name="name" mb="10px" type="text" />

              <FormLabel htmlFor="name">Owner</FormLabel>
              <Input name="owner" mb="10px" type="text" />

              <FormLabel htmlFor="email">ETA Duration </FormLabel>
              <Input mb="10px" name="estimatedDuration" type="email" />

              <FormLabel htmlFor="Phone">Loaction</FormLabel>
              <Input mb="10px" name="location" type="text" />
              {/* <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button> */}
            </FormControl>
            {/* </Box> */}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onCloseNormal}>
              Close
            </Button>
            <Button onClick={handleSubmit}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box>
        <Container maxW={["100%", "90%", "80%"]}>
          <Flex
            pt={["30px", "0px", "0px"]}
            as={Center}
            justifyContent="center"
            alignItems="center"
            h="120px"
            w="full"
            flexDirection="row"
          >
            <Box cursor="pointer">
              <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="3xl"
                fontWeight="extrabold"
              >
                ConstructW
              </Text>
              {/* <NextLink href="/" passHref> */}
              {/* <Image src={logo} alt="" /> */}
              {/* </NextLink> */}
            </Box>
            <Spacer />
            <Box display={["none", "none", "flex"]}>
              <Button
                onClick={onOpenNormal}
                leftIcon={<AddIcon />}
                ml={4}
                variant={"outline"}
                borderColor="greenBrand.100"
              >
                Add Project
              </Button>

              <HStack p="0px 20px 0px 20px" h="40px">
                <Link
                  p="5px"
                  m={{ base: "10px 0px", lg: "0px 20px" }}
                  _hover={{ textDecoration: "none" }}
                  _focus={{ borderBottom: "2px solid #77C208" }}
                  _active={{ borderBottom: "2px solid #77C208" }}
                  href="/map"
                >
                  Map
                </Link>
              </HStack>
              <HStack p="0px 20px 0px 20px" h="40px">
                <Link
                  p="5px"
                  m={{ base: "10px 0px", lg: "0px 20px" }}
                  _hover={{ textDecoration: "none" }}
                  _focus={{ borderBottom: "2px solid #77C208" }}
                  _active={{ borderBottom: "2px solid #77C208" }}
                  href="/charts/chart"
                >
                  Chart
                </Link>
              </HStack>
              <HStack p="0px 20px 0px 20px" h="40px">
                <Button onClick={signOut} ursor="pointer" fontWeight="bold">
                  Sign Out
                </Button>
              </HStack>
            </Box>
          </Flex>
        </Container>
        <Box h="100vh" w="100%">
          <Center>
            <Box as={Flex} w="90%">
              <Box>
                <Text fontSize="30px" fontWeight="bold">
                  Contractor Details
                </Text>
              </Box>
            </Box>
          </Center>

          <Container mt="10px" maxW="90%">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Active Projects</Th>
                  <Th>Project Limit</Th>
                </Tr>
              </Thead>
              <Tbody>
                {constructorSignup.map((item, index) => (
                  <Tr key={index}>
                    <Td
                      _hover={{
                        color: "black",
                      }}
                    >
                      {item.name}
                    </Td>
                    <Td>{item.activeProjects}</Td>
                    <Td>{item.projectLimit}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Container>
          <Center p="30px 0px 30px 0px">
            <Box as={Flex} w="90%">
              <Box>
                <Text fontSize="30px" fontWeight="bold">
                  Project Details
                </Text>
              </Box>
            </Box>
          </Center>

          <Container mt="10px" maxW="90%">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Owner</Th>
                  <Th>Contractor</Th>
                  <Th>Estimated Duration</Th>
                  <Th>Location</Th>
                  <Th>Map</Th>
                </Tr>
              </Thead>
              <Tbody>
                {projectDetails.map((item, index) => (
                  <>
                    <Tr key={index}>
                      <Td onClick={(e) => handleRemoveItem(e.target.innerHTML)}>
                        {item.name}
                      </Td>
                      <Td>{item.owner}</Td>
                      <Td>{item.contractor}</Td>
                      <Td>{item.estimatedDuration}</Td>
                      <Td>
                        {/* <Link isExternal href={`https://www.google.com/maps/@${},72.8362768`}></Link> */}
                        {item.location}
                      </Td>
                      <Td>
                        <Link
                          isExternal
                          href={`https://www.google.com/maps/@${item.lat},${item.lng}`}
                        >
                          Open in Map
                        </Link>
                      </Td>
                    </Tr>
                  </>
                ))}
              </Tbody>
            </Table>
          </Container>
        </Box>
      </Box>
    </>
  );
}
