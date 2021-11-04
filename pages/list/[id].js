import { Container, Stack, Flex, Text } from '@chakra-ui/react';
import { useState, useEffect} from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [data, setData] = useState({})

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    fetch(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
    .then(response => response.json())
    .then(data => setData(data));
  }, []);

  return (
    <Container>
      <Stack mt="12">
        <Text fontSize="4xl" fontWeight="bold">{data.title}</Text>
        <Flex mt={12} mb={42} justifyContent="space-around">
          <Text>{data.type}</Text>
          <Text>{data.company}</Text>
          <Text>{data.location}</Text>
        </Flex>
        <div dangerouslySetInnerHTML={{__html: data.description}} />
      </Stack>
    </Container>
  )
}

