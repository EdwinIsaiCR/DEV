import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Box, FormControl,
    FormLabel, Input,
    Select,
  Flex,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Lorem,
  Button,
  useDisclosure,
    FormErrorMessage,
    FormHelperText, } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useForm } from "@mantine/form";
import axios from "axios";

export default function CreateAccount(props) {
  const [rollingButton, setRollingButon] = useState(false);
  const [success, setSuccess] = useState();
  const [checked, setChecked] = useState(false);
  const [userType, setUserType] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure(false)
  const form = useForm({
    initialValues: {
      email: "",
      saveLogin: false,
      role: "buyer",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Wrong Email"),
    },
  });

  async function handleCreate(values) {
    setRollingButon(true);

    try {
      console.log(form.values);
      form.values.role = userType;

      const result = await axios.post("/api/createUser", form.values);
      setSuccess({ status: result.data.status, message: result.data.message });
      if (result.data.status === 200) {
        console.log("Logged in");
        setRollingButon(false);
        signIn("credentials", {
          email: form.values.email,
          password: form.values.password,
        });
        setSuccess({
          status: result.data.status,
          message: result.data.message,
        });
      } else {
        console.log("Error");
        setSuccess({
          status: result.data.status,
          message: result.data.message,
        });
        setRollingButon(false);
      }
    } catch (error) {}
  }
  return (
    <Transition.Root show={props.Loginbar} as={Fragment}>
      <Dialog onClose={props.Loginbar}>
        <Transition.Child
          as={Fragment}
          enter="east-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveTo="opacity-0"
        >
          <Box display={"fixed"} bg={"gray.500"} />
        </Transition.Child>
        <Box display={"flex"} overflow={"auto"}>
          <Box
            display={"flex"}
            alignItems={"end"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Transition.Child
              as={Fragment}
              enter="east-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              
                <Box>
                  <h2>Hola</h2>
                  <form onSubmit={form.onSubmit((values) => handleCreate(values))}>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Email" type="email" {...form.getInputProps("email")} />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder="Password" type="passsword" {...form.getInputProps("email")} />
                  </FormControl>
                  </form>
                </Box>

            </Transition.Child>
          </Box>
        </Box>
      </Dialog>
    </Transition.Root>
  );
}
