"use client";
import { useRef, ReactElement, useContext, useState } from "react";
import { H3Style, InputStyle, Label, Page, TextareaStyle } from "./styles";
import { IconType } from "react-icons";
import { TemeContext } from "../../../context";
import { InputTypes } from "../../../types";

interface InputProps {
    value?: string | number;
    label: string;
    type: InputTypes;
    name: string;
    icon?: IconType;
    onChange?: (value: string) => void;
    onFocus?: () => void;
    placeholder?: string;
    className?: string;
    required?: boolean;
    maxLength?: number;
}

export function CustomInput({
    icon: Icon,
    type,
    label,
    value,
    onChange,
    placeholder,
    name,
    className,
    required,
    maxLength
}: InputProps): ReactElement {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { theme } = useContext(TemeContext);

    return (
        <Page className={className}>
            <Label theme={theme}>
                {Icon && <Icon />}
                <H3Style>{label}</H3Style>
            </Label>
            {type === InputTypes.textarea ? (
                <TextareaStyle
                    theme={theme}
                    maxLength={maxLength}
                    name={name}
                    value={value}
                    onChange={(e: any) => onChange && onChange(e.target.value)}
                    placeholder={placeholder}
                />
            ) : (
                <InputStyle
                    theme={theme}
                    required={required}
                    maxLength={maxLength}
                    name={name}
                    ref={inputRef}
                    type={type}
                    value={value}
                    onChange={(e: any) => onChange && onChange(e.target.value)}
                    placeholder={placeholder}
                />
            )}
        </Page>
    );
}
