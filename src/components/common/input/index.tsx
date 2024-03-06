'use client'
import { useRef, ReactElement, useContext } from "react";
import { H3Style, InputStyle, Label, Page, TextareaStyle } from "./styles";
import { IconType } from "react-icons";
import { TemeContext } from "../../../context";

interface InputProps {
	value?: string;
	label: string;
	type: string;
	name: string;
	icon?: IconType;
	onChange?: (value: string) => void;
	onFocus?: () => void;
	placeholder?: string;
	className?: string;
	required?: boolean
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
	required
}: InputProps): ReactElement {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const { theme } = useContext(TemeContext);

	return (
		<Page className={className}>
			<Label theme={theme}>
				{Icon && <Icon />}
				<H3Style>{label}</H3Style>
			</Label>
			{type !== "textarea" ? (
				<InputStyle
					theme={theme}
					required={required}
					name={name}
					ref={inputRef}
					type={type}
					value={value}
					onChange={(e: any) => onChange && onChange(e.target.value)}
					placeholder={placeholder}
				/>
			) : (
				<TextareaStyle
					theme={theme}
					name={name}
					value={value}
					onChange={(e: any) => onChange && onChange(e.target.value)}
					placeholder={placeholder}
				/>
			)}
		</Page>
	);
}
