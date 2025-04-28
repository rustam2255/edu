import { ButtonProps } from './button.props';
import styles from './button.module.css';
import cn from 'classnames';


const Button = ({ appearance, arrow = 'none', children, ...props }: ButtonProps)=> {
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}

			{arrow !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow === 'down',
					})}
				>
		
				</span>
			)}
		</button>
	);
};

export default Button;