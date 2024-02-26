import { useForm } from "@mantine/form";
import axios from "axios";
import Navbar from "components/Navbar";
import { Box, Input, FormControl, FormLabel, Button } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

export default function CreateHouse(props) {
  const [Loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      description: "",
      address: "",
      country: "",
      price: "",
    },
  });

  async function createHouse(values) {
    setLoading(true);
    try{
        const result = await axios.post("/api/house/create/createManually", values);
            
    console.log(result.data);
    router.push(result.data.url);
    } catch (erro){}

  }
  return (
    <Box>
      <form onSubmit={form.onSubmit((values) => createHouse(values))}>
        <Box>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input type="text" {...form.getInputProps("description")} />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input type="text" {...form.getInputProps("address")}/>
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input type="text" {...form.getInputProps("country")}/>
          </FormControl>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input type="number" {...form.getInputProps("price")}/>
          </FormControl>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
