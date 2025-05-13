import IconButton from './IconButton';

interface INavigationBarProps {
	isDark: boolean;
	showBackButton: boolean;
	showCloseButton: boolean;
	showTitle: boolean;
	title?: string;
	onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
	onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
	isDark,
	showBackButton,
	showCloseButton,
	showTitle,
	title = '',
	onBackButtonClick = () => { },
	onCloseButtonClick = () => { },
}: INavigationBarProps) {
	return (
		<div className='flex justify-between w-full'>
			<div className='flex navigation-title-wrapper'>
				{/** 뒤로가기 버튼 */}
				{showBackButton && (
					<IconButton
						iconPath={`https://kr.object.ncloudstorage.com/gandi-cdn/svg/back_left${isDark ? '_white' : ''}.svg`}
						alt='back_left'
						onClick={onBackButtonClick}
					/>
				)}
				{/** 페이지 이름 */}
				{showTitle && (
					<h1 className={`text-2xl ${isDark ? 'text-white' : 'text-primary'}`}>{title}</h1>
					)}
				{/** 닫기 버튼 */}
			</div>
			{showCloseButton && (
				<IconButton
					iconPath={`https://kr.object.ncloudstorage.com/gandi-cdn/svg/cancel${isDark ? '_white' : ''}.svg`}
					alt='cancel'
					onClick={onCloseButtonClick}
				/>
			)}
		</div>
	);
}