import { Input, Container, Text, Button, Stack, InputGroup} from '@chakra-ui/react';
import { PasswordInput } from '../component/password';
import { useRouter } from 'next/router';

export default function Home() {
  const { router } = useRouter();
  const login = {
    router.push('/list')
  }
  return (
    <Container>
      <Stack mt="12">
        <Text fontSize="md"> Login </Text>
        <InputGroup>
          <Input placeholder="username" />
        </InputGroup>
        <InputGroup>
          <PasswordInput />
        </InputGroup>
        <Button colorScheme="blue" onClick={login}>Login</Button>
      </Stack>
    </Container>
  )
}
