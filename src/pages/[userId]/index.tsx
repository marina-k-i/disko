import {
  AspectRatio,
  Avatar,
  AvatarProps,
  Box,
  BoxProps,
  Container,
  Flex,
  FlexProps,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { PrismaClient } from '@prisma/client'
// import { Favorite, Follows, Item, PrismaClient, User } from '@prisma/client'
import { CtxOrReq } from 'next-auth/client/_utils'
import { getSession, useSession } from 'next-auth/react'
import React from 'react'
import { HiLink, HiLocationMarker } from 'react-icons/hi'
import { Layout } from '../../components/Layout/Layout'
import { Card } from '../index'
// interface Props {
//   user: User & {
//     followedBy: Follows[]
//     Items: (Item & {
//       favorite: Favorite[]
//     })[]
//   }
// }

interface CardWithAvatarProps extends FlexProps {
  avatarProps: AvatarProps
  action?: React.ReactNode
}
const CardWithAvatar = (props: CardWithAvatarProps) => {
  const { action, avatarProps, children, ...rest } = props
  return (
    <Flex
      position="relative"
      direction="column"
      align={{ sm: 'center' }}
      maxW="2xl"
      mx="auto"
      bg={useColorModeValue('white', 'gray.800')}
      shadow={{ sm: 'base' }}
      rounded={{ sm: 'lg' }}
      px={{ base: '6', md: '8' }}
      pb={{ base: '6', md: '8' }}
      {...rest}
    >
      <Avatar
        mt="-10"
        borderWidth="4px"
        borderColor={useColorModeValue('white', 'gray.700')}
        size="2xl"
        {...avatarProps}
      />
      <Box position="absolute" top="4" insetEnd={{ base: '6', md: '8' }}>
        {action}
      </Box>
      {children}
    </Flex>
  )
}

const CardContent = (props: BoxProps) => (
  <Box textAlign={{ sm: 'center' }} pt="2" {...props} />
)

interface UserInfoProps extends StackProps {
  location: string
  website: string
  memberSince: string
}

const UserInfo = (props: UserInfoProps) => {
  console.log(props)
  const { location, website, memberSince, ...stackProps } = props
  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      spacing={{ base: '1', sm: '6' }}
      fontSize="sm"
      fontWeight="medium"
      color={useColorModeValue('blue.600', 'blue.300')}
      {...stackProps}
    >
      <HStack>
        <Icon as={HiLocationMarker} />
        <Text>{location}</Text>
      </HStack>
      <HStack>
        <Icon as={HiLink} />
        <Text>{website}</Text>
      </HStack>
    </Stack>
  )
}

const Post: React.FC<any> = ({ user }) => {
  const { data: session, status } = useSession()
  return (
    <Layout>
      <Box as="section" pt="20" pb="12" position="relative">
        <AspectRatio
          ratio={6}
          maxH="60"
          minH="48"
          position="absolute"
          inset="0"
        >
          <Image src="/unnamed.png" />
        </AspectRatio>

        <Box mt="28">
          <CardWithAvatar
            maxW="xl"
            avatarProps={{
              src: user?.image as string,
              name: 'Esther Felix',
            }}
            // action={
            //   <>
            //     {session?.user.id === session?.user?.id ? (
            //       <>
            //         <FollowButton id={user?.id} followedBy={user?.followedBy} />
            //       </>
            //     ) : (
            //       <>
            //         <Button size="sm" leftIcon={<HiPencilAlt />}>
            //           Edit
            //         </Button>
            //       </>
            //     )}
            //   </>
            // }
          >
            <CardContent>
              <Heading size="lg" fontWeight="extrabold" letterSpacing="tight">
                {user?.name}
              </Heading>
              <Text color={useColorModeValue('gray.600', 'gray.400')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </Text>

              <Box bg="bg-surface">
                <Container py={{ base: '4', md: '8' }}>
                  {/* <HStack>
                    <Divider />
                    <RadioButtonGroup defaultValue="left">
                      <RadioButton value="left">
                        <BsTwitter />
                      </RadioButton>
                      <RadioButton value="center">
                        <BsInstagram />
                      </RadioButton>
                      <RadioButton value="right">
                        <BsFacebook />
                      </RadioButton>
                    </RadioButtonGroup>
                    <Divider />
                  </HStack> */}
                </Container>
              </Box>

              <UserInfo
                location="Tokyo, Japan"
                website="esther.com"
                memberSince="Joined March. 2022"
              />
            </CardContent>
          </CardWithAvatar>
        </Box>
      </Box>
      <Box p="2">
        <Heading>Packs</Heading>
        <Box p="4">
          <SimpleGrid
            columns={[2, 2, 3, 4, 5, 6]}
            columnGap={{ base: '4', md: '4' }}
            rowGap={{ base: '8', md: '8' }}
          >
            {/* {user?.Items.map((item) => {
            return ( */}
            {/* <ItemCard item={user?.Items[0]} id={user?.sellerId as string} key={user?.Items[0].id} /> */}
            {/* )
          })} */}
          </SimpleGrid>
        </Box>

        <Heading>Clips</Heading>
        <Box p="4">
          <SimpleGrid
            columns={[2, 2, 3, 4, 5, 6]}
            columnGap={{ base: '4', md: '4' }}
            rowGap={{ base: '8', md: '8' }}
          >
            {user?.Item.map((item: { id: React.Key | null | undefined }) => {
              return (
                // <ItemCard
                //   item={item}
                //   id={user.sellerId as string}
                //   key={item.id}
                // />
                // <>{item.src}</>
                <Card key={item.id} />
              )
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  )
}

export const getServerSideProps = async (context: CtxOrReq) => {
  const prisma = new PrismaClient()
  const session = await getSession(context)

  const ite = await prisma.user.findUnique({
    where: {
      // @ts-ignore
      userId: context.query.userId.split('@')[1],
    },
    include: {
      Item: true,
      // followedBy: { where: { followingId: session?.user.id } },
    },
  })

  console.log(ite)

  return {
    props: {
      user: JSON.parse(JSON.stringify(ite)),
    },
  }
}

export default Post
