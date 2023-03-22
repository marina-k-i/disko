import styled from '@emotion/styled'
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core'
import AvatarGen from 'boring-avatars'
import { useAtomValue } from 'jotai'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { playAtom } from '../atom'
import { Layout } from '../components/Layout/Layout'
const Video = styled.video({
  borderRadius: '20px',
  width: '100%',
})

const VideoCategory = styled.video({
  borderRadius: '20px',
  objectFit: 'cover',
  height: '110px',
  width: '120px',
})

const VideoCategory2 = styled.video({
  borderRadius: '20px',
  objectFit: 'cover',
  height: '150px',
  width: '100px',
})

const VideoCard = styled.video({
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',

  // objectFit: 'cover',
  // height: '180px',
  // width: '320px',
})
export const Card = () => {
  const play = useAtomValue(playAtom)
  // const bg = useColorModeValue('white', 'gray.800')
  return (
    <Link href="/@genkofcam/cl8lb9g2v0000rdkam70wvd7n">
      <Box
        color="red"
        sx={{ backgroundColor: 'gray' }}
        // bg={'gray'} p="2" borderRadius="12" w="260px"
      >
        <Video src={'koll_low.mp4'} muted loop autoPlay={play} playsInline />
        <Title size="md" weight={'bold'}>
          Product Title
        </Title>
        <Flex>
          <Center>
            <AvatarGen
              size={24}
              name="seller3"
              variant="marble"
              colors={['#498FFE', '#FD85B4', '#6B12F1', '#FEABA7', '#0A0D68']}
            />

            <Text ml="4">VJ CLip Name</Text>
          </Center>
          <Text ml="2">・$24</Text>
        </Flex>
      </Box>
    </Link>
  )
}

const Index = () => {
  const { data: session, status } = useSession()
  const play = useAtomValue(playAtom)
  // const bg = useColorModeValue('white', 'gray.800')
  const urls = [
    'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/koll_low.mp4',
    'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/fiber_optical.mp4',
    'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/dirty_ribbon.mp4',
    'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/moonvirus.mp4',
    'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/pray_state.mp4',
    'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/warm_neon.mp4',
  ]

  return (
    <Layout>
      <Box px="sm">
        <Box>
          <Title order={3}>
            Selling the most
            <br /> popular Clips is only here
          </Title>
        </Box>
        <Center my="md">
          <Flex gap="sm">
            <Button color="brand.0" size="xs">
              Trending
            </Button>
            <Button size="xs">Trending</Button>
            <Button size="xs">Trending</Button>
            <Button size="xs">Trending</Button>
          </Flex>
        </Center>

        <Center>
          <Box sx={{ width: 340 }}>
            <AspectRatio ratio={160 / 88} mx="auto">
              <VideoCard
                src={
                  'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/koll_low.mp4'
                }
                autoPlay={play}
                muted
                loop
                playsInline
              />
            </AspectRatio>
            <Box
              bg="brand.0"
              h="100px"
              sx={{ borderRadius: '0px 0px 16px 16px' }}
              p="8px"
            >
              <Title size="xs">Backpack (Pacific Pink)</Title>
              <Text>Bjorka Robert</Text>
            </Box>
          </Box>
        </Center>
        <Title mb="2" size="lg">
          ⚡️Categories
        </Title>

        <SimpleGrid cols={3} spacing={1.5}>
          <Center>
            <Box
              // bg={bg}
              p="1"
              sx={{ borderRadius: 12 }}
            >
              <VideoCategory
                src={
                  'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/koll_low.mp4'
                }
                autoPlay={play}
                muted
                loop
                playsInline
              />
              <Center>
                <Title size="sm" mt="1">
                  Tunnel
                </Title>
              </Center>
            </Box>
          </Center>
          <Center>
            <Box
              // bg={bg}
              p="1"
              sx={{ borderRadius: 12 }}
            >
              <VideoCategory
                src={
                  'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/fiber_optical.mp4'
                }
                autoPlay={play}
                muted
                loop
                playsInline
              />
              <Center>
                <Title size="sm" mt="1">
                  Tunnel
                </Title>
              </Center>
            </Box>
          </Center>
          <Center>
            <Box p="1" sx={{ borderRadius: 12 }}>
              <VideoCategory
                src={
                  'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/dirty_ribbon.mp4'
                }
                autoPlay={play}
                muted
                loop
                playsInline
              />
              <Center>
                <Title size="sm" mt="1">
                  Tunnel
                </Title>
              </Center>
            </Box>
          </Center>
          <Center>
            <Box p="1" sx={{ borderRadius: 12 }}>
              <VideoCategory
                src={
                  'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/moonvirus.mp4'
                }
                autoPlay={play}
                muted
                loop
                playsInline
              />
              <Center>
                <Title size="sm" mt="1">
                  Tunnel
                </Title>
              </Center>
            </Box>
          </Center>
          <Center>
            <Box p="1" sx={{ borderRadius: 12 }}>
              <VideoCategory
                src={
                  'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/pray_state.mp4'
                }
                autoPlay={play}
                muted
                loop
                playsInline
              />
              <Center>
                <Title size="sm" mt="1">
                  Tunnel
                </Title>
              </Center>
            </Box>
          </Center>
          <Center>
            <Box p="1" sx={{ borderRadius: 12 }}>
              <VideoCategory
                src={
                  'https://pub-1390415108a448918cbbc01faa088da3.r2.dev/warm_neon.mp4'
                }
                autoPlay={play}
                muted
                loop
                playsInline
              />
              <Center>
                <Title size="sm" mt="1">
                  Tunnel
                </Title>
              </Center>
            </Box>
          </Center>
        </SimpleGrid>

        <Title my="4" size="lg">
          👀 Pickup Pacs
        </Title>
        <SimpleGrid cols={1} spacing={2}>
          {[1, 2].map((i) => (
            <Center key={i}>
              <Box p="2" sx={{ borderRadius: 12 }}>
                <SimpleGrid cols={3} spacing={2}>
                  {[1, 2, 23].map((i) => (
                    <VideoCategory2
                      src={urls[Math.floor(Math.random() * urls.length)]}
                      autoPlay={play}
                      muted
                      loop
                      playsInline
                      key={i}
                    />
                  ))}
                </SimpleGrid>
                <Center>
                  <Box>
                    <Center>
                      <Title size="sm" mt="1">
                        Tunnel
                      </Title>
                    </Center>
                    <Center>
                      <Text>Creater Name</Text>
                    </Center>
                  </Box>
                </Center>
              </Box>
            </Center>
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  )
}

export default Index
