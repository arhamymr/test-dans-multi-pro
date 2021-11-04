import React from 'react';
import { Flex, Text, Spacer } from '@chakra-ui/react';
import Link from 'next/link'

export function List({ id, title, company, location, type}) {
  return (
    <Link href={`/list/${id}`} passHref>
      <Flex 
        flexDirection="column" 
        mb={4}
        p={4}
        cursor="pointer"
        justifyContent="center"
        boxShadow="lg" 
        borderRadius="sm">
        <Flex>
          <Text fontWeight="semibold">{title}</Text>
          <Spacer/>
          <Text fontWeight="semibold">{location}</Text>
        </Flex>
        <Flex>
          <Text maxWidth="300px">
          {company}
          </Text>
          <Spacer/>
          <Text alignItems="right">
          {type}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}