import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import IconButton from './IconButton';

export interface IDefaultTextFieldProps {
	id: string;
	iconPath: string;
	iconAlt: string;
	placeholder: string;
	value: string;
	errorMessage: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	onIconClick: React.MouseEventHandler<HTMLButtonElement>;
	isError: boolean;
}

export default function DefaultTextField({
	id,
	iconPath,
	iconAlt,
	placeholder,
	value,
	onChange,
	onIconClick,
	errorMessage,
	isError,
}: IDefaultTextFieldProps) {
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const borderColor = isFocused ? 'border-secondary' : !value ? 'border-mono300' : 'border-primary';

	return (
		<div className='relative text-field'>
			<div
				className={`
				border-b
				text-primary
				${borderColor}
		`}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			>
				<input
					id={id}
					className={'outline-none'}
					type='text'
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					alt={iconAlt}
					src={iconPath}
				/>
				{!!value && <IconButton
					iconPath='https://kr.object.ncloudstorage.com/gandi-cdn/svg/delete_dark%202.svg'
					alt='delete-icon'
					onClick={onIconClick}
				/>}
			</div>
			{isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</div>
	);
}