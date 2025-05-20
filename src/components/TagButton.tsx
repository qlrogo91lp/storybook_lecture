interface ITagButtonProps {
	children: string;
	isChecked?: boolean;
	onClick: () => void;
}

export default function TagButton({ children, isChecked, onClick }: ITagButtonProps) {
	const buttonStyle = isChecked ? 'bg-white text-primary' : 'bg-dark-opacity text-white';

	return (
		<button
			className={`
				rounded-[17.5px]
				px-[10px]
				border
			border-white
				h-[33px]
				text-sm
				font-medium
				${buttonStyle}
			`}
			onClick={onClick}>
			{children}
		</button>
	);
}