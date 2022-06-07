import { Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import image from "../../assets/logo-primary.svg";
import { Input } from "../../components/Fom/Input";

export const Login = () => {
  return (
    <Flex
      padding="10px 15px"
      alignItems="center"
      height="100vh"
      bgGradient="linear(to-r, purple.800 65%, white 35%)"
      color="white"
    >
      <Flex
        w="100%"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
      >
        <Grid w="100%" paddingRight="100px">
          <Image src={image} alt="Doit" boxSize="120px" />
          <Heading as="h1">O jeito fácil, grátis</Heading>
          <Text>
            Flexivel e atrativo de gerenciar
            <b>seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          as="form"
          mt="4"
          w="100%"
          padding="30px 15px"
          border="solid 3px"
          borderColor="gray.100"
          bg="white"
          color="gray.900"
        >
          <Heading size="lg">Bem vindo de volta!</Heading>
          <VStack mt={"6"} spacing={"5"}>
            <Input
              icon={FaEnvelope}
              name="email"
              placeholder={"Digite seu Email"}
            />
            <Input icon={FaLock} name="senha" placeholder="Digite sua Senha" />
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
