import { MainButton } from "@/components/Buttons/MainButton";
import { Section } from "@/components/Section";
import { TextTag } from "@/components/TextTag";
import { AspectRatio, Card, CardBody, Flex, HStack, Heading, Icon, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowDown } from "react-feather";
import Slider from "react-slick";

export function CardsCarousel(){
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const cardCarouselSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        speed: 1500,
        slidesToShow: isWideVersion ? 3 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6500,
        pauseOnHover: true,
    };

    return(
        <Section py="24" zIndex={1} bg="primary.green" color="white">
            <Stack spacing="16">
                <HStack justifyContent={"space-between"}>
                    <Stack spacing="6" className='fade' maxW="500px">
                        <TextTag>Services</TextTag>
                        <Heading textAlign={"left"}>See what might be the best solution for you</Heading>
                    </Stack>
                </HStack>

                <Slider {...cardCarouselSettings} className='fade'>
                    <Flex w="100%" alignItems={"center"} justifyContent={"center"} display={"flex !important"} m="10px">
                        <Card maxW='sm'>
                            <CardBody pb="8">
                                <AspectRatio maxW='400px' ratio={4 / 3}>
                                    <Image width={400} height={240} src='/images/tile.jpeg'
                                    alt='Tile'
                                    borderRadius='lg'
                                    />
                                </AspectRatio>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Tile</Heading>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel dui sed sapien posuere porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </Flex>

                    <Flex w="100%" alignItems={"center"} justifyContent={"center"} display={"flex !important"} m="10px">
                        <Card maxW='sm'>
                            <CardBody pb="8">
                                <AspectRatio maxW='400px' ratio={4 / 3}>
                                    <Image width={400} height={240} src='/images/lvp_flooring.jpg' alt='LVP Flooring' borderRadius='lg'/>
                                </AspectRatio>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>LVP Flooring</Heading>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel dui sed sapien posuere porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </Flex>

                    <Flex w="100%" alignItems={"center"} justifyContent={"center"} display={"flex !important"} m="10px">
                        <Card maxW='sm'>
                            <CardBody pb="8">
                                <AspectRatio maxW='400px' ratio={4 / 3}>
                                    <Image width={400} height={240} src='/images/bathroom.jpeg' alt='Entire Bathroom Renovation' borderRadius='lg' />
                                </AspectRatio>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Entire Bathroom Renovation</Heading>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel dui sed sapien posuere porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </Flex>

                    <Flex w="100%" alignItems={"center"} justifyContent={"center"} display={"flex !important"} m="10px">
                        <Card maxW='sm'>
                            <CardBody pb="8">
                                <AspectRatio maxW='400px' ratio={4 / 3}>
                                    <Image width={400} height={240} src='/images/hardwood.jpg' alt='Green double couch with wooden legs' borderRadius='lg' />
                                </AspectRatio>
                                
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Hardwood</Heading>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel dui sed sapien posuere porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </Flex>

                    <Flex w="100%" alignItems={"center"} justifyContent={"center"} display={"flex !important"} m="10px">
                        <Card maxW='sm'>
                            <CardBody pb="8">
                                <AspectRatio maxW='400px' ratio={4 / 3}>
                                    <Image width={400} height={240} src='/images/backsplash.jpg'
                                    alt='Backsplash'
                                    borderRadius='lg'
                                    />
                                </AspectRatio>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Backsplash</Heading>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel dui sed sapien posuere porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </Flex>
                </Slider>
                
                <Flex w="100%" justifyContent={"center"} className='fade'>
                    <Link href="/#form">
                        <MainButton size={"lg"} rightIcon={<Icon as={ArrowDown}/>} h="70px" fontSize={"lg"} bg="white" color="primary.green" _hover={{bg: "#f3efef"}}>Get a Free Quote</MainButton>
                    </Link>
                </Flex>
            </Stack>
        </Section>
    )
}