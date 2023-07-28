import { OutlineButton } from '@/components/Buttons/OutlineButton'
import { AspectRatio, Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, HStack, Heading, Icon, Image, Img, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import Head from 'next/head'
import { Section } from '@/components/Section';

import Logo from '../../public/logo.svg';
import Startril from '../../public/startril.svg';
import Whatsapp from '../../public/whatsapp-line.svg';
import { TextTag } from '@/components/TextTag';
import { MainButton } from '@/components/Buttons/MainButton';
import { ArrowDown, ArrowRight, CheckSquare, Facebook, Instagram, Phone } from 'react-feather';

import ReactCompareImage from 'react-compare-image';
import Slider from "react-slick";
import { Board } from '@/components/Board';
import { Input } from '@/components/Forms/Inputs/Input';
import { useEffect } from 'react';
import Link from 'next/link';
import { ControlledSelect } from '@/components/Forms/Selects/ControlledSelect';
import { Select } from '@/components/Forms/Selects/Select';
import { CardsCarousel } from '@/sections/CardsCarousel';


export default function Home() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const comparisonCarouselsettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        swipe: false,
    };

    useEffect(() => {
        const sections = document.querySelectorAll(".fade");

        function scrollAnimate() {
            sections.forEach(e => {
                let t = e.getBoundingClientRect().top;
                t <= (window.innerHeight || document.documentElement.clientHeight) / 1.1 && e.classList.add("active")
            })
        }

        scrollAnimate()
        window.addEventListener("scroll", scrollAnimate);
    }, []);

    return (
        <Box pos="relative" className='main'>
            <Head>
                <title>Fine Floors</title>
                <meta name="description" content="FineFloors, a company specialized in providing high-quality flooring installation services to transform your spaces into functional and long-lasting works of art." />
                <link rel="icon" href="/icon.svg" />
            </Head>

            <Flex flexDir="column" w="100%">
                <Flex pos="absolute" zIndex={0} w={"100%"}>
                </Flex>

                <Section zIndex={1}>
                    <HStack justifyContent={"space-between"}>
                        <Flex maxW={["110px","140px","170px","200px"]}>
                            <Logo/>
                        </Flex>

                        <Link href="tel:(904) 835-2323">
                            <OutlineButton leftIcon={<Icon as={Phone}/>} size="sm" fontSize={["sm","md","md","md"]}>(903) 760-0340</OutlineButton>
                        </Link>
                    </HStack>
                </Section>

                <Section py="24" zIndex={1}>
                    <Stack alignItems={"center"} direction={["column", "column", "row", "row"]} spacing="6">
                        <Stack spacing="8" className='fade'>
                            <TextTag>Floors Installations</TextTag>
                            <Heading textAlign={"left"} fontSize={["4xl","4xl","5xl","5xl"]}>The floor is the basis of a beautiful and cozy environment.</Heading>
                            <Text>Be the next to have your home transformed with a fresh new look!</Text>

                            <Link href="/#form">
                                <MainButton rightIcon={<Icon as={ArrowDown}/>}>Get a Free Quote</MainButton>
                            </Link>
                        </Stack>
                    
                        <Box h="300px" w="100%" maxW="800px" bg="gray" className='fade'></Box>
                    </Stack>
                </Section>

                <CardsCarousel/>

                <Section py="24" zIndex={1} bg="gray.100">
                    <Stack alignItems={"center"} direction={["column", "column", "row", "row"]} spacing="12" justifyContent={"space-between"}>
                        <Flex pos="absolute" zIndex={0} w="50%" opacity={0.1} left="-10%">
                            {/* <IconBlack/> */}
                        </Flex>
                        <Img h="300px" w="100%" maxW="400px" className='fade' src="/images/floor_work.jpg" borderTopLeftRadius={10} borderBottomRightRadius={10}/>

                        <Stack spacing="8" className='fade' maxW="460px">
                            <TextTag>why choose us?</TextTag>
                            <Heading textAlign={"left"}>We are the ideal company for high quality work!</Heading>
                            
                            <Stack spacing="4">
                                <HStack spacing="3">
                                    <Icon as={CheckSquare} color="primary.green"/>
                                    <Text>The process of working with us is simple and efficient.</Text>
                                </HStack>

                                <HStack spacing="3">
                                    <Icon as={CheckSquare} color="primary.green"/>
                                    <Text>First, we arrange an initial assessment to understand your needs.</Text>
                                </HStack>

                                <HStack spacing="3">
                                    <Icon as={CheckSquare} color="primary.green"/>
                                    <Text>We then provide you with a quick and fair quote.</Text>
                                </HStack>

                                <HStack spacing="3">
                                    <Icon as={CheckSquare} color="primary.green"/>
                                    <Text>And, if you choose to have ink included, we can offer that option too.</Text>
                                </HStack>

                                <HStack spacing="3">
                                    <Icon as={CheckSquare} color="primary.green"/>
                                    <Text>We guarantee the quality of our work and are committed to your satisfaction.</Text>
                                </HStack>
                            </Stack>

                            <Link href="/#form">
                                <MainButton rightIcon={<Icon as={ArrowDown}/>}>Get a Free Quote</MainButton>
                            </Link>
                        </Stack>
                    </Stack>
                </Section>

                <Section className="comparison" py="24" zIndex={1} bg="primary.orange" color="white">
                    <Stack spacing="16">
                        <HStack justifyContent={"space-between"}>
                            <Stack spacing="6" className='fade' maxW="500px">
                                <TextTag>Comparsion</TextTag>
                                <Heading textAlign={"left"}>The best of our Work</Heading>
                            </Stack>

                            <Flex width={"70px"} className='fade'>
                                
                            </Flex>
                        </HStack>

                        <Slider {...comparisonCarouselsettings} className='fade'>
                            <ReactCompareImage leftImage="/images/service1_before.jpg" rightImage="/images/service1_after.jpg"/>
                            <ReactCompareImage leftImage="/images/service2_before.jpg" rightImage="/images/service2_after.jpg"/>
                            <ReactCompareImage leftImage="/images/service3_before.jpg" rightImage="/images/service3_after.jpg"/>
                            <ReactCompareImage leftImage="/images/service4_before.jpg" rightImage="/images/service4_after.jpg"/>
                            <ReactCompareImage leftImage="/images/service5_before.jpg" rightImage="/images/service5_after.jpg"/>
                        </Slider>
                        
                        <Flex w="100%" justifyContent={"center"} className='fade'>
                            <Link href="/#form">
                                <MainButton size={"lg"} rightIcon={<Icon as={ArrowDown}/>} h="70px" fontSize={"lg"}>Get a Free Quote</MainButton>
                            </Link>
                        </Flex>
                    </Stack>
                </Section>

                <Section py="24" zIndex={1} bg="gray.100" id="form" overflow={"hidden"} pos="relative">
                    <Stack spacing="16" alignItems={"center"}>
                        <Stack spacing="6" textAlign={"center"} className='fade' maxW="500px">
                            <TextTag>Contact</TextTag>
                            <Heading>Receive your free estimate in minutes</Heading>
                        </Stack>

                        <Flex pos="absolute" className='floor' zIndex={0} opacity={0.1} w="100%">
                            
                        </Flex>

                        {/* <Flex pos="absolute" left="5%" className='floor'>
                            <Floor/>
                        </Flex> */}

                        <Flex className='fade' w="100%" maxW="600px">
                            <Board tag="flex" w="100%">
                                <Stack w="100%" spacing="10">
                                    <HStack justifyContent={"space-between"}>
                                        <Stack>
                                            <Heading color="primary.green">Get a Price</Heading>
                                            <Text>Fill in the fields to request a quote</Text>
                                        </Stack>

                                        <Flex w={"50px"} h="50px" className='light'>
                                            
                                        </Flex>
                                    </HStack>

                                    <Stack as="form">
                                        <Stack direction={["column", "column", "row", "row"]}>
                                            <Select label='*Services' h="50px" name="service" w="100%" fontSize="sm" placeholder="Select Service" focusBorderColor="blue.primary" bg="gray.400" variant="filled" _hover={ {bgColor: 'gray.500'} } size="lg">
                                                <option value={"Tile"}>Tile</option>
                                                <option value={"Backsplash"}>Backsplash</option>
                                                <option value={"LVP Flooring"}>LVP Flooring</option>
                                                <option value={"Hardwood"}>Hardwood</option>
                                                <option value={"Entire Bathroom Renovation"}>Entire Bathroom Renovation</option>
                                            </Select>
                                            <Input name="phone" mask="zip" placeholder="ZipCode" label="*ZipCode" type="tel"/>
                                        </Stack>

                                        <Input name="email" placeholder="Email" label="*Email" type="text"/>

                                        <Stack direction={["column", "column", "row", "row"]}>
                                            <Input name="name" placeholder="Your Name" label="*Full Name" type="text"/>
                                            <Input name="phone" mask="phone" placeholder="Your Phone" label="*Phone" type="tel"/>
                                        </Stack>

                                        <Stack direction={["column", "column", "row", "row"]}>
                                            <Input name="email" placeholder="Email" label="*Email" type="text"/>
                                        </Stack>

                                        <Flex pt="5" w="100%" alignItems={"center"} justifyContent={"center"} className='buttonIconAnimation'>
                                            <MainButton rightIcon={<Icon as={ArrowRight}/>} w="100%">Send</MainButton>
                                        </Flex>
                                    </Stack>
                                </Stack>
                            </Board>
                        </Flex>
                    </Stack>
                </Section>

                <Section py="24" zIndex={1} bg="gray.800" color="white">
                    <Stack spacing="12">
                        <Stack direction={["column", "column", "row", "row"]} spacing="10" justifyContent={"space-between"}>
                            <Stack spacing="6">
                                <Text fontSize={"lg"} fontWeight={"semibold"}>Contact Info</Text>

                                <Stack>
                                    <Link href="mailto:contact@finefloorsus.com">
                                        <Text _hover={{textDecor: "underline"}} transition="all ease .5s">E-Mail: contact@finefloorsus.com</Text>
                                    </Link>
                                    <Link href="tel:(904) 835-2323">
                                        <Text _hover={{textDecor: "underline"}} transition="all ease .5s">Phone: (904) 835-2323</Text>
                                    </Link>
                                </Stack>
                            </Stack>

                            <Stack spacing="6">
                                <Text fontSize={"lg"} fontWeight={"semibold"}>Opening Hours</Text>

                                <Stack>
                                    <Text>Monday to Friday - 8:00 AM to 5:00 PM</Text>
                                    <Text>Saturday - 8:00 AM to 2:00 PM</Text>
                                </Stack>
                            </Stack>

                            <Stack spacing="6">
                                <Text fontSize={"lg"} fontWeight={"semibold"}>Follow us online</Text>

                                <HStack>
                                    <Link href={"https://instagram.com"}>
                                        <Icon as={Instagram} fontSize={"24px"} opacity="0.8" _hover={{opacity: 1}} transition="all ease .5s"/>
                                    </Link>
                                    <Link href={"https://facebook.com"}>
                                        <Icon as={Facebook} fontSize={"24px"} opacity="0.8" _hover={{opacity: 1}} transition="all ease .5s"/>
                                    </Link>
                                    <Link href={"https://whatsapp.com"}>
                                        <Icon as={Whatsapp} fill="#fff" fontSize={"24px"} opacity="0.8" _hover={{opacity: 1}} transition="all ease .5s"/>
                                    </Link>
                                </HStack>
                            </Stack>
                        </Stack>

                        <Divider opacity="0.1"/>

                        <Stack direction={["column", "column", "row", "row"]} fontSize={"sm"} justifyContent={"space-between"}>
                            <HStack spacing="5">
                                <Flex w="70px">
                                    
                                </Flex>

                                <Text>All rights reserved to Fine Floors</Text>
                            </HStack>

                            <HStack spacing="5">
                                <Link href="/privacy-policy">
                                    <Text>Privacy Policy</Text>
                                </Link>

                                <Link href="/terms">
                                    <Text>Terms of Use</Text>
                                </Link>
                            </HStack>

                            <HStack spacing="5">
                                <Text>Created By</Text>
                                <Flex w="100px">
                                    <Startril />
                                </Flex>
                            </HStack>
                        </Stack>
                    </Stack>
                </Section>
            </Flex>
        </Box>
    )
}