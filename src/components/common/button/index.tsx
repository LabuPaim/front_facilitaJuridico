import { ReactElement, useContext } from "react";
import { ButtonStyle } from "./styles";
import { IconType } from "react-icons";
import { TemeContext } from "../../../context";

interface ButtonProps {
	label: string;
	className?: string;
	icon?: IconType;
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	bgColor?: any;
	bgHoverColor?: any;
	txHoverColor?: any;
}

export function CustomButton({ icon: Icon, label, type, onClick, bgColor, bgHoverColor, className, txHoverColor }: ButtonProps): ReactElement {
	const { theme } = useContext(TemeContext);
	return (
		<ButtonStyle className={className} onClick={onClick} type={type} theme={theme} bgColor={bgColor} bgHoverColor={bgHoverColor} txHoverColor={txHoverColor} >
			{Icon && <Icon />}
			{label}
		</ButtonStyle>
	);
}
