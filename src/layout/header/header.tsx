import { HeaderProps } from './header.props';

const Header = ({ ...props }: HeaderProps) => {
	return <div {...props}>Header</div>;
};

export default Header;