import { InputGroup, InputLeftElement, FormControl, InputProps, Icon, Input as ChakraInput, FormErrorMessage, Text, Link, FormLabel, CheckboxProps, Checkbox as ChakraCheckox } from "@chakra-ui/react";
import { ReactNode, Ref, useEffect, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { mask as applyMask } from "../../../utils/ReMask";

interface FormCheckboxProps extends CheckboxProps{
    name: string;
    //type: string;
    value?: string// | number;
    label?: string;
    variant?: string;
    inputLink?: ReactNode;
    //icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    register?: UseFormRegister<any>;
    control?: any;
    mask?: "phone" | "cpf" | "cnpj" | "money" | "cep" | "cpf-cnpj" | "";
    error?: FieldError;
    onChange?: (value: any) => void;
    inputRef?: Ref<any>
}

export function Checkbox({ name, children, icon, variant = "", inputLink, value = "", label = "", mask = "", register = undefined, onChange, isRequired, inputRef, control, error, maxW, colorScheme, ...rest }: FormCheckboxProps){
    const [controlledValue, setControlledValue] = useState<string>("");

    useEffect(() => {
        setControlledValue(value);

        if(onChange){
            onChange(value);
        }
    }, [value]);

    // useEffect(() => {
    //     ref.dispatchEvent(customEvent);
    //  });

    function getControlledInputAttributes(){
        if(register){
            return {
                ...register(name),
                value: controlledValue,
                onChange: (event: any) => {
                    setControlledValue(event.target.value);
                }
            }
        }

        return {
            ref: (inputRef ? inputRef : undefined),
            value: controlledValue,
            onChange: (event: any) => { 
                    setControlledValue(event.target.value);
                    if(onChange){
                        onChange(event.target.value)
                    }
                }
                
        }
    }

    const [focus, setFocus] = useState(false);

    return(
        <FormControl pos="relative" isInvalid={!!error} maxW={maxW}>
            <ChakraCheckox {...getControlledInputAttributes()} name={name} {...rest}>{children}</ChakraCheckox>
        
            { 
                // !!error && (
                //     <FormErrorMessage fontSize="11px">
                //         {/* <Icon as={}  stroke={error. ? "#e53e3e" : (controlledValue === "" ? "#a0a3bd" : "#7FCEFF")} fill="none" w="13" h="13px" strokeWidth="3"/> */}
                //         {error.message}
                //     </FormErrorMessage>   
                // )
            }
        </FormControl>
    );
}

//export default forwardRef(Input);