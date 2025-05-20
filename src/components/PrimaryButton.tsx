import React from 'react';

type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButtonProps {
	theme: PrimaryButtonTheme;
	children: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
}

const dark = 'bg-primary text-white';
const light = 'bg-white text-primary';
const social = 'bg-social text-white'
const text = 'bg-transparent text-primary';
const disabledStyle = 'disabeld:bg-mono-100 disabled:text-mono-200'

const color: Record<PrimaryButtonTheme, string> = {
	dark,
	light,
	social,
	text,
}

export default function PrimaryButton({ theme, children, onClick, disabled }: IPrimaryButtonProps) {
	return (
		<button
			className={`
				w-full
				rounded-[5px]
				h-[59px]
				${color[theme]}
				${disabledStyle}
			`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}