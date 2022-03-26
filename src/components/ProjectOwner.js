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
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  TableCaption,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";

import { getSession, signOut, useSession } from "next-auth/react";
import GetDataContext from "../context/Data";
// import ProjectOwner from "../components/ProjectOwner";

export default function ProjectOwner() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const value = useContext(GetDataContext);
  const [constructorSignup, setconstructorSignup] = useState(
    value.data.contractorSignUp
  );
  const [projectDetails, setprojectDetails] = useState(
    value.data.projectDetails
  );
  console.log("constructorSignup", constructorSignup);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
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
                Add Project
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
                  <Th>Contractor</Th>
                  <Th>Estimated Duration</Th>
                  <Th>Location</Th>
                </Tr>
              </Thead>
              <Tbody>
                {projectDetails.map((item, index) => (
                  <Tr key={index}>
                    <Td
                      _hover={{
                        color: "black",
                      }}
                    >
                      {item.contractor}
                    </Td>
                    <Td>{item.estimatedDuration}</Td>
                    <Td>{item.location}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Container>
        </Box>
      </Box>
    </>
  );
}
