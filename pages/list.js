import { Input, Container, Skeleton, Text, Stack, InputGroup, Button} from '@chakra-ui/react';
import { List } from '../component/listItem';
import { useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroller';

export default function Home() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [hasMore, setHasMore] = useState(true)

  const searchData = () => {
    fetch(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${search}&location=${location}`)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => setData([]));
  } 

  const loadFunc = (pos) => {
    setHasMore(false)
    fetch(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=${pos}`)
    .then(response => response.json())
    .then(current=> {
      setData([...data,...current])
    });
  }


  return (
    <Container>
      <Stack mt="12">
        <Text fontSize="md"> Logo </Text>
        <InputGroup>
          <Input placeholder="Search" onChange={e => setSearch(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Input placeholder="location" onChange={e => setLocation(e.target.value)} />
        </InputGroup>
        <Button colorScheme="blue" onClick={searchData}> Search </Button>
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={hasMore}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
          {data.length === 0 ?
            <Stack>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
            </Stack>
            : data.map((item, index) => (
            <List 
              key={index}
              id={item.id}
              company={item.company} 
              title={item.title}
              location={item.location} 
              type={item.type}
            />
         ))}
        </InfiniteScroll>
       

       
      </Stack>
    </Container>
  )
}

