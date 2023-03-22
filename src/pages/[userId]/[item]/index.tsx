// Chakra imports
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import styled from '@emotion/styled'
import { PrismaClient } from '@prisma/client'
// import { Favorite, Follows, Item, PrismaClient, Tag } from '@prisma/client'
import AvatarGen from 'boring-avatars'
import { useAtomValue } from 'jotai'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import Link from 'next/link'
import { FC } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { playAtom } from '../../../atom'
import { Layout } from '../../../components/Layout/Layout'
// interface Props {
//   creater_items: (Item & {
//     user: User
//     Tags: Tag[]
//   })[]
//   item: Item & {
//     Tags: Tag[]
//     user: User & {
//       followedBy: Follows[]
//     }
//     favorite?: Favorite[]
//     _count: {
//       favorite: number
//     }
//   }
// }

const Page: FC<any> = ({ creater_items, item }) => {
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const Video = styled.video({
    borderRadius: '8px',
    width: '96%',
    marginTop: 22,
  })
  const bg = useColorModeValue('white', 'gray.800')
  const play = useAtomValue(playAtom)
  // Chakra Color Mode
  return (
    <Layout>
      <Center>
        <Box h="63vh">
          <Center>
            <Video
              src={
                'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/koll_low.mp4#t=0.5'
              }
              muted
              loop
              controls
              playsInline
              autoPlay={play}
            />
          </Center>
          <Box bg={bg} h="100%" mt="22" borderTopRadius={'36'} p="4">
            <Flex>
              <Center>
                <AvatarGen
                  size={40}
                  name="seller3"
                  variant="marble"
                  colors={[
                    '#498FFE',
                    '#FD85B4',
                    '#6B12F1',
                    '#FEABA7',
                    '#0A0D68',
                  ]}
                />
                <Link href="/@genkofcam">

                  <Box ml="4">
                    <Heading size="lg">VJ CLiip Name</Heading>
                    <Flex>
                      <Text mr="4">vj takumu</Text>
                      <Text color="purple.500" fontWeight={'black'}>
                        +Follow
                      </Text>
                    </Flex>
                  </Box>

                </Link>
                <Box bg="logo.100" p="3" borderRadius="30" ml="12">
                  {'toggle' ? (
                    <BsHeart color="black" size="24" />
                  ) : (
                    <BsHeartFill />
                  )}
                </Box>
              </Center>
            </Flex>

            <Flex mt="2">
              <Heading fontWeight="black">$ 32</Heading>
              <Spacer />
              <Button bg="black" color="white">
                Add Cart
              </Button>
            </Flex>

            <Heading size="md" my="2">
              Description
            </Heading>
            <Text>
              I ever dream of dive deep into beautiful ocean, full of bubble and
              pink colors spreading around me. It’s so pretty, Watatsumi Island.
              I wish I could visit some place like in my dream.
            </Text>
          </Box>
        </Box>
      </Center>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const prisma = new PrismaClient()
  const ite = await prisma.item.findMany({
    include: { user: true, Favorite: true },
    take: 4,
  })
  const users = await prisma.user.findMany({
    include: { Item: { take: 3 } },
    take: 6,
  })

  const session = await getSession(context)

  const item = await prisma.item.findFirst({
    where: { id: context.query.id as string },
    include: {
      user: true,
      // Tags: true,
      // favorite: { where: { userId: session?.user.id } },
      _count: { select: { Favorite: true } },
    },
  })

  // const creater_items = JSON.parse(JSON.stringify(ite))

  return {
    props: {
      // creater_items: creater_items,
      item: JSON.parse(JSON.stringify(item)),
    },
  }
}

export default Page
