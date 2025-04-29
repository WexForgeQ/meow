import { type ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	variant?: keyof typeof BUTTON_VARIANTS;
	buttonIcon?: boolean;
}

const BUTTON_VARIANTS = {
	primary:
		'px-[30px] py-[11px] shadow-md text-white bg-primary dark:bg-primaryDark enabled:hover:bg-primaryDark/90 enabled:dark:hover:bg-primary/90',
};

export const Button = ({
	children,
	className,
	variant = 'primary',
	buttonIcon = false,
	...rest
}: ButtonProps) => {
	const buttonContent = children;

	return (
		<button
			disabled={rest.disabled}
			className={twMerge(
				`flex-center text-semibold gap-1 whitespace-nowrap rounded-lg font-sans text-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50`,
				BUTTON_VARIANTS[variant],
				!buttonIcon ? 'py-1.5' : 'px-0',
				className,
			)}
			{...rest}
		>
			{buttonContent}
		</button>
	);
};
