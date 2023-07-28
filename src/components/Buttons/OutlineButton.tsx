import { Button, ButtonProps } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import { ElementType } from "react";

interface ButtonModelProps extends ButtonProps{
    icon?: ElementType;
    children: string;
    hasAnimation?: boolean;
}

export function OutlineButton({icon, children, hasAnimation = false, ...rest} : ButtonModelProps){
    return (
        <Button px="7" w="fit-content" pos="relative" fontSize="md" variant="outline" h="45px"
        {...rest}
        >
            {children}
        </Button>
    )
}