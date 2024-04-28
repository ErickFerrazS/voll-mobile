import { Box, FormControl, ITextProps, Image, Input, Link, Text, VStack } from "native-base";
import Logo from './assets/Logo.png';
import { TouchableOpacity } from "react-native";
import { Titulo } from "./componentes/Titulo";
import { Botao } from "./componentes/Botao";

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo children="Faça login em sua conta." />
      <Box>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
            <Input
                placeholder="Insira seu endereço de email."
                size="lg"
                width="100%"
                borderRadius="lg"
                bgColor="gray.100"
                shadow={3}
            />
        </FormControl>
        <FormControl>
          <FormControl.Label>Senha</FormControl.Label>
            <Input
                placeholder="Insira sua senha."
                size="lg"
                width="100%"
                borderRadius="lg"
                bgColor="gray.100"
                shadow={3}
            />
        </FormControl>
      </Box>
      <Botao>
        Entrar
      </Botao>
      <Link href="https://www.alura.com.br" mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box
          width="100%"
          flexDirection="row"
          justifyContent="center"
          mt={8}>
        <Text>Ainda não tem uma conta? </Text>
        <TouchableOpacity>
          <Text color="blue.500">
            Cadastre-se agora!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}



