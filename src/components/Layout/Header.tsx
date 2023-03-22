import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  createStyles,
  Divider,
  Drawer,
  Group,
  Header,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons'
import { Logo } from './Logo'
const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))

const mockdata = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
  },
  {
    icon: IconFingerprint,
    title: 'Security',
    description: 'The shell’s rounded shape and the grooves on its.',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'This Pokémon uses its flying ability to quickly chase',
  },
  {
    icon: IconNotification,
    title: 'Notifications',
    description: 'Combusken battles with the intensely hot flames it spews',
  },
]

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const { classes, theme } = useStyles()

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" weight={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))

  return (
    <Box pb={12}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Logo />
          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <a href="#" className={classes.link}>
              Home
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                <Group position="apart" px="md">
                  <Text weight={500}>Features</Text>
                  <Anchor href="#" size="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        Get started
                      </Text>
                      <Text size="xs" color="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}

// import {
//   Avatar,
//   Box,
//   Button,
//   ButtonGroup,
//   chakra,
//   Divider,
//   Flex,
//   HStack,
//   Link,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
//   Spacer,
//   Text,
//   useColorMode,
//   useColorModeValue,
//   useDisclosure,
//   VisuallyHidden,
// } from '@chakra-ui/react'
// import { signIn, signOut, useSession } from 'next-auth/react'
// import {
//   AiFillBell,
//   AiFillHome,
//   AiOutlineInbox,
//   AiOutlineSearch,
// } from 'react-icons/ai'
// import { BsFillCameraVideoFill, BsHeart } from 'react-icons/bs'
// import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
// import { Logo } from './Logo'

// // export const Header = () => {
// //   const isDesktop = useBreakpointValue({
// //     base: false,
// //     lg: true,
// //     md: true,
// //   })
// //   const { data: session, status } = useSession()
// //   return (
// //     <Flex p="2" pos="sticky" top="0" zIndex={9} bg={'light.100'} align="center">
// //       <>
// //         {isDesktop ? (
// //           <>
// //             <Logo />
// //             <Spacer />
// //             <ButtonGroup variant="ghost" spacing="1">
// //               {session && (
// //                 <>
// //                   {session.user.role == 'seller' && (
// //                     <Link href="/dashboard">
// //                       <a>
// //                         <Button aria-current="page">Seller Dashboard</Button>
// //                       </a>
// //                     </Link>
// //                   )}
// //                 </>
// //               )}
// //             </ButtonGroup>
// //             <HStack spacing="4">
// //               <ButtonGroup variant="ghost" spacing="1"></ButtonGroup>
// //               <>{status === 'loading' ? <>laoding</> : <UserMenu />}</>
// //             </HStack>
// //           </>
// //         ) : (
// //           <>
// //             <Logo />
// //             <Spacer />
// //             <HStack>
// //               <ButtonGroup variant="ghost" spacing="1">
// //                 <UserMenu />
// //               </ButtonGroup>
// //             </HStack>
// //           </>
// //         )}
// //       </>
// //     </Flex>
// //   )
// // }

// export const Header = () => {
//   const bg = useColorModeValue('white', 'gray.800')
//   const mobileNav = useDisclosure()
//   const { toggleColorMode } = useColorMode()
//   const { data: session, status } = useSession()
//   return (
//     <chakra.header
//       bg={bg}
//       w="full"
//       px={{ base: 2, sm: 4 }}
//       py={2}
//       // pb="2"
//       // pt="1"
//       shadow="md"
//       zIndex="9999999"
//     >
//       <Flex alignItems="center" justifyContent="space-between" mx="auto">
//         <HStack display="flex" spacing={3} alignItems="center" zIndex={999}>
//           {/* <Box display={{ base: 'inline-flex', md: 'none' }}>
//             <IconButton
//               display={{ base: 'flex', md: 'none' }}
//               aria-label="Open menu"
//               fontSize="20px"
//               color="gray.800"
//               _dark={{ color: 'inherit' }}
//               variant="ghost"
//               icon={<AiOutlineMenu />}
//               onClick={mobileNav.onOpen}
//             />
//             <VStack
//               pos="absolute"
//               top={0}
//               left={0}
//               right={0}
//               display={mobileNav.isOpen ? 'flex' : 'none'}
//               flexDirection="column"
//               p={2}
//               pb={4}
//               m={2}
//               bg={bg}
//               spacing={3}
//               rounded="sm"
//               shadow="sm"
//             >
//               <CloseButton
//                 aria-label="Close menu"
//                 justifySelf="self-start"
//                 onClick={mobileNav.onClose}
//               />
//               <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
//                 Dashboard
//               </Button>
//               <Button
//                 w="full"
//                 variant="ghost"
//                 // colorScheme="brand"
//                 leftIcon={<AiOutlineInbox />}
//               >
//                 Inbox
//               </Button>
//               <Button
//                 w="full"
//                 variant="ghost"
//                 leftIcon={<BsFillCameraVideoFill />}
//               >
//                 Videos
//               </Button>
//               <Button size="sm" onClick={toggleColorMode} variant="ghost">
//                 Toggle Color
//               </Button>
//             </VStack>
//           </Box> */}
//           <chakra.a
//             href="/"
//             title="Choc Home Page"
//             display="flex"
//             alignItems="center"
//           >
//             <Logo />

//             <VisuallyHidden>Choc</VisuallyHidden>
//           </chakra.a>

//           <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
//             <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
//               Dashboard
//             </Button>
//             <Button
//               variant="solid"
//               colorScheme="brand"
//               leftIcon={<AiOutlineInbox />}
//               size="sm"
//             >
//               Inbox
//             </Button>
//             <Button
//               variant="ghost"
//               leftIcon={<BsFillCameraVideoFill />}
//               size="sm"
//             >
//               Videos
//             </Button>
//             <Button size="sm" onClick={toggleColorMode}>
//               Toggle Mode
//             </Button>
//             <chakra.a
//               p={3}
//               color="gray.800"
//               _dark={{ color: 'inherit' }}
//               rounded="sm"
//               _hover={{ color: 'gray.800', _dark: { color: 'gray.600' } }}
//             >
//               <AiFillBell />
//               <VisuallyHidden>Notifications</VisuallyHidden>
//             </chakra.a>
//           </HStack>
//         </HStack>
//         <HStack
//           spacing={3}
//           display={mobileNav.isOpen ? 'none' : 'flex'}
//           alignItems="center"
//         >
//           {/* <InputGroup>
//             <InputLeftElement pointerEvents="none">
//               <AiOutlineSearch />
//             </InputLeftElement>
//             <Input type="tel" placeholder="Search..." />
//           </InputGroup> */}

//           <chakra.a
//             p={3}
//             color="gray.800"
//             _dark={{ color: 'inherit' }}
//             rounded="sm"
//             _hover={{ color: 'gray.800', _dark: { color: 'gray.600' } }}
//           >
//             <AiOutlineSearch />
//             <VisuallyHidden>Notifications</VisuallyHidden>
//           </chakra.a>

//           <>
//             {status === 'loading' ? (
//               <></>
//             ) : (
//               <>
//                 {session ? (
//                   <>
//                     <HStack>
//                       <ButtonGroup variant="ghost" spacing="1">
//                         <UserMenu />
//                       </ButtonGroup>
//                     </HStack>
//                   </>
//                 ) : (
//                   <>
//                     <Button size="sm" onClick={() => signIn('google')}>
//                       Log in
//                     </Button>
//                   </>
//                 )}
//               </>
//             )}
//           </>
//         </HStack>
//       </Flex>
//     </chakra.header>
//   )
// }

// const ColorMode = () => {
//   const { colorMode, toggleColorMode } = useColorMode()
//   return (
//     <>
//       <Flex>Color Mode</Flex>
//       <Spacer />
//       {colorMode === 'light' ? (
//         <MdOutlineDarkMode fontSize="1.25rem" />
//       ) : (
//         <MdOutlineLightMode fontSize="1.25rem" />
//       )}
//     </>
//   )
// }

// const UserMenu = () => {
//   const { colorMode, toggleColorMode } = useColorMode()
//   const { data: session } = useSession()
//   return (
//     <Box zIndex={'999999'}>
//       {session ? (
//         <Menu>
//           <MenuButton>
//             {/* <AvatarGen
//               size={40}
//               name="vj raku"
//               variant="marble"
//               colors={['#498FFE', '#FD85B4', '#6B12F1', '#FEABA7', '#0A0D68']}
//             /> */}
//             <Avatar
//               size="sm"
//               name="Dan Abrahmov"
//               // src="https://bit.ly/dan-abramov"
//               src={session.user.image}
//             />
//           </MenuButton>
//           <MenuList fontSize={'15'}>
//             <Link href={`/@${session.user.sellerId}`}>
//               <a>
//                 <Box px="3" pb="1">
//                   <Text fontWeight={'bold'}>ラク</Text>
//                   <Text color="gray.500">{'@rakutek'}</Text>
//                 </Box>
//               </a>
//             </Link>
//             <Divider />
//             {session.user.role == 'user' && (
//               <Link href="/becomeseller">
//                 <a>
//                   2<MenuItem>Become Seller</MenuItem>
//                 </a>
//               </Link>
//             )}

//             <Link href="/addItem">
//               <a>
//                 <MenuItem>
//                   <Text>New Clip</Text>
//                 </MenuItem>
//               </a>
//             </Link>

//             <Link href="/addItem">
//               <a>
//                 <MenuItem>
//                   <BsHeart />
//                   Liked clip
//                 </MenuItem>
//               </a>
//             </Link>

//             <Link href="/addItem">
//               <a>
//                 <MenuItem>Stripe Dashboard</MenuItem>
//               </a>
//             </Link>

//             <Link href="/addItem">
//               <a>
//                 <MenuItem>Acount Setting</MenuItem>
//               </a>
//             </Link>

//             <MenuItem onClick={toggleColorMode}>
//               <ColorMode />
//             </MenuItem>
//             <Divider />
//             <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
//           </MenuList>
//         </Menu>
//       ) : (
//         <Menu>
//           <MenuButton>
//             <Avatar width="9" height="9" />
//           </MenuButton>

//           <MenuList zIndex={999999}>
//             <MenuItem onClick={() => signIn('google')}>Sign In</MenuItem>
//             <MenuItem onClick={toggleColorMode}>
//               <ColorMode />
//             </MenuItem>
//           </MenuList>
//         </Menu>
//       )}
//     </Box>
//   )
// }
