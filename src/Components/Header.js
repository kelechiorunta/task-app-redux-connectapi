import React from 'react'
import { Flex, Box, Button, Text, Icon, Menu } from '@chakra-ui/react'

function Header() {
  return (
    <Flex
    as={'header'}
    align={'center'}
    justify={'space-between'}
    filter={'blur(0.1px)'}
    height={'100px'}
    position={'sticky'}
    top={'0'}
    zIndex={'5'}
    bg={'blue.500'}
    color={'white'}>
        <Box>
            <Text fontSize={'xl'} fontWeight={'bold'} ml='4'>PEEZ</Text>
        </Box>
        <Flex>
            <Button variant={'ghost'}>HOME</Button>
            <Button variant={'ghost'}>AGENTS</Button>
            <Button variant={'ghost'}>SERVICES</Button>
        </Flex>
    </Flex>
  )
}

export default Header