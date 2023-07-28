import { InputProps } from "@chakra-ui/react";
import { Controller, FieldError, UseFormRegister } from "react-hook-form";
import { Checkbox } from ".";

interface FormInputProps extends InputProps{
    name: string;
    type: string;
    value?: string;
    variant?: string;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    mask?: "phone" | "cpf" | "cnpj" | "money" | "";
    error?: FieldError;
    label?: string;
}

interface ControlledCheckboxProps extends FormInputProps{
    register?: UseFormRegister<any>;
    control?: any;
}

export function ControlledCheckbox({control, children, name, value, error, type, label, ...rest}:ControlledCheckboxProps){
    return(
        <Controller
            name={name}
            control={control}
            defaultValue={value}
            render={({ field: {ref, ...field} }) => 
                // <Input inputRef={ref} {...field} name={name} type={type} value={value} error={error} {...rest} label={label}/>
                <Checkbox inputRef={ref} name={name}>{children}</Checkbox>
            }
        />
    );
}