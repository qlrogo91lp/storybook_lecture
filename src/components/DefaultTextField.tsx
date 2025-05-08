import ErrorMessage from './ErrorMessage';

export interface IDefaultTextFieldProps {
	errorMessage: string;
	iconPath: string;
	iconAlt: string;
	placeholder: string;
	value: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	onIconClick: React.MouseEventHandler<HTMLInputElement>;
}

export default function DefaultTextField({
	errorMessage,
	iconPath,
	iconAlt,
	placeholder,
	value,
	onChange,
	onIconClick,
}: IDefaultTextFieldProps) {
	return (
		<div>
			<input
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onClick={onIconClick}
				alt={iconAlt}
				src={iconPath}
			/>
			<ErrorMessage>{errorMessage}</ErrorMessage>
		</div>
	);
}