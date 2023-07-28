import { Box, ButtonProps, Flex, Stack, Text } from "@chakra-ui/react"
import { ReactNode } from "react"
import { SolidButton } from "./SolidButton"

interface MainButtonProps extends ButtonProps{
    children: string;
}

export function MainButton({children, id, display, ...rest} : MainButtonProps){
    return(
        <SolidButton className="mainButton" zIndex={3} h="50px" _groupHover={{transform: "translate(0px, -12px);"}} _groupFocus={{transform: "translate(0px, -10px);"}} fontWeight={"semibold"} fontSize={"md"} bg="primary.green" color="white" borderTopLeftRadius={10} borderBottomRightRadius={10} _hover={{bg: "#1f913f"}} transition="all ease 0.5s" {...rest}>
            {children}
        </SolidButton>
    )
}