import { FunctionComponent } from 'react';
import Footer from './footer/footer';
import Header from './header/header';
import { LayoutProps } from './layout.props';
import Sidebar from './sidebar/sidebar';
import styles from './layout.module.css';
import { AppContextProvider, IAppContext } from '../context/app.context';

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T) {
		return (
			<Layout>
				<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
					<Component {...props} />
				</AppContextProvider>
			</Layout>
		);
	};
};