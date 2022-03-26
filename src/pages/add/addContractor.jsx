import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

function addContractor() {
  return (
    <>
      <Box w="300px" h="400px" p="30px">
        <Text fontWeight={"bold"} fontSize={"20px"}>
          Add Contractor Details
        </Text>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="Phone">Phone</FormLabel>
          <Input id="Phone" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="Projects">Active Projects</FormLabel>
          <Input id="Projects" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Project Limit</FormLabel>
          <Input type="text" />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
}

export default addContractor;
