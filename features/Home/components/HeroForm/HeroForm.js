import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const HeroForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      width="100%"
      padding="2rem"
      borderRadius={"sm"}
      backgroundColor="white"
      color={"gray.700"}
    >
      <Text fontSize={"xl"} fontWeight="bold">
        Free Pdf Guide
      </Text>
      <Text fontSize={"lg"}>Complete form below to download the guide.</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input
            marginTop={"1.3rem"}
            id="name"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <Text fontSize={"xs"} color="red.400">
              {errors.name.type}
            </Text>
          )}

          <Flex
            gap={{ base: "0", sm: "1rem" }}
            flexDirection={{ base: "column", sm: "row" }}
          >
            <Input
              marginTop={"1.3rem"}
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <Text fontSize={"xs"} color="red.400">
                {errors.email.type}
              </Text>
            )}

            <Input
              marginTop={"1.3rem"}
              id="phone"
              type="text"
              placeholder="Phone"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <Text fontSize={"xs"} color="red.400">
                {errors.phone.type}
              </Text>
            )}
          </Flex>
          <Checkbox
            marginTop={"1.3rem"}
            id="inr"
            type="checkbox"
            placeholder="INR"
            {...register("inr", { required: true })}
          >
            I consent to having this website my submitted info.
          </Checkbox>
          {errors.inr && (
            <Text fontSize={"xs"} color="red.400">
              {errors.inr.type}
            </Text>
          )}
        </FormControl>
        <Button
          type="submit"
          colorScheme={"blue"}
          width="100%"
          fontSize={"xl"}
          padding="2rem"
          marginTop={"2rem"}
        >
          Download Now
        </Button>
      </form>
    </Box>
  );
};

export default HeroForm;
