import { FormControl, SelectProps, Select as ChakraSelect, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { ReactNode, Ref, useEffect, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface FormSelectProps extends SelectProps{
    name: string;
    children: ReactNode;
    variant?: string;
    leftIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

    value?: string;
    label?: string;
    error?: FieldError;
    register?: UseFormRegister<any>;
    onChange?: (value: any) => void;
    selectRef?: Ref<any>

    selected?: number;
}

export function Select({ name, children, variant, selectRef, label, isRequired, value = "", selected, error, register, onChange, ...rest } : FormSelectProps){
    const [controlledValue, setControlledValue] = useState("");

    function getRegister(){
        if(register){
            return {
                ...register(name)
            }
        }

        return {
            ref: (selectRef ? selectRef : undefined),
            value: controlledValue,
            onChange: (event: any) => { //React.ChangeEvent<HTMLInputElement>
                    setControlledValue(event.target.value);
                    if(onChange){
                        onChange(event.target.value)
                    }
                }
                
        }
    }

    useEffect(() => {
        setControlledValue(value);
        if(onChange){
            onChange(value);
        }
    }, [value]);

    return(
        <FormControl pos="relative" isInvalid={!!error}>
            {
                label && (
                    <FormLabel zIndex="1" cursor="text" color="gray.600" transition="ease 0.2s" fontWeight="normal" fontSize={"11px"} textTransform={"uppercase"}>{label} {isRequired && '*'}</FormLabel>
                )
            }

            <ChakraSelect {...getRegister()} borderRadius="3px" h="50px" fontWeight={controlledValue ? 'semibold' : 'regular'} cursor="pointer" name={name} fontSize="sm" bgColor={"gray.100"} size="lg" _focus={{borderColor:"primary.green", boxShadow: "0 3px 10px 0 rgb(34 41 47 / 10%)"}} {...rest}>
                {children}
            </ChakraSelect>

            { !!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    );
}