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
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";

import { getSession, signOut, useSession } from "next-auth/react";
import GetDataContext from "../context/Data";
// import ProjectOwner from "../components/ProjectOwner";

export default function Contractor() {
  const [newContractor, setContractor] = useState({});
  const [newWorker, setnewWorker] = useState({
    name: "",
    phone: "",
    address: "",
    gender: "",
    aadhar_card: "",
    TimeSlot: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const value = useContext(GetDataContext);

  const [Workers, setWorkers] = useState(value.data.workerDetails);
  console.log(Workers);

  function handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setnewWorker({ ...newWorker, [name]: value });
    // console.log("newConstructor", newConstructor);

    // console.log("newConstructor", newConstructor);

    // setprojectDetails({ ...projectDetails, [name]: value });
  }

  function handleSubmit() {
    setWorkers([...Workers, newWorker]);
  }
  const handleRemoveItem = (e) => {
    const name = e;
    setWorkers(Workers.filter((item) => item.name !== name));
  };
  // return "";
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Project</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            {" "}
            {/* <Box w="300px" h="400px" p="30px"> */}
            <FormControl onChange={(e) => handleChange(e)}>
              <FormLabel htmlFor="name"> Name</FormLabel>
              <Input name="name" mb="10px" type="text" />

              <FormLabel htmlFor="name">Phone no</FormLabel>
              <Input name="phone" mb="10px" type="text" />

              <FormLabel htmlFor="name">Gender</FormLabel>
              <Input name="gender" mb="10px" type="text" />

              <FormLabel htmlFor="email">Address </FormLabel>
              <Input mb="10px" name="address" type="email" />

              <FormLabel htmlFor="Phone">Addhar Card</FormLabel>
              <Input mb="10px" name="aadhar_card" type="text" />

              <FormLabel htmlFor="Phone">Time Slot</FormLabel>
              <Input mb="10px" name="TimeSlot" type="text" />
              {/* <Button mt={4} colorScheme="teal" type="submit">
                  Submit
                </Button> */}
            </FormControl>
            {/* </Box> */}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
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
                onClick={onOpen}
                leftIcon={<AddIcon />}
                ml={4}
                variant={"outline"}
                borderColor="greenBrand.100"
              >
                Add Worker
              </Button>

              <HStack p="0px 20px 0px 20px" h="40px">
                {/* <Avatar boxSize="35px" /> */}

                <Text onClick={signOut} ursor="pointer" fontWeight="bold">
                  Sign Out
                </Text>
              </HStack>
            </Box>
          </Flex>
        </Container>
        <Box h="100vh" w="100%">
          <Center>
            <Box as={Flex} w="90%">
              <Box>
                <Text fontSize="30px" fontWeight="bold">
                  Worker Details
                </Text>
              </Box>
            </Box>
          </Center>

          <Container mt="10px" maxW="90%">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Phone Number</Th>
                  <Th>Address</Th>
                  <Th>Gender</Th>
                  <Th>Adhar Card</Th>
                  <Th>Time Slot</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Workers.map((item, index) => (
                  <Tr key={index}>
                    <Td
                      onClick={(e) => handleRemoveItem(e.target.innerHTML)}
                      _hover={{
                        color: "black",
                      }}
                    >
                      {item.name}
                    </Td>
                    <Td>{item.phone}</Td>
                    <Td>{item.address}</Td>
                    <Td>{item.gender}</Td>
                    <Td>{item.aadhar_card}</Td>
                    <Td>{item.TimeSlot}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Container>
        </Box>
      </Box>
      //{" "}
    </>
    // );
  );
}
