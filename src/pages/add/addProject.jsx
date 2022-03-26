import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

function addProject() {
  return (
    <div>
      <Box w="300px" h="400px" p="30px">
        <Text fontWeight={"bold"} fontSize={"20px"}>
          Add Project Details
        </Text>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Estimated Duration</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Contractor Name:</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Location:</FormLabel>
          <Input type="text" />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default addProject;
