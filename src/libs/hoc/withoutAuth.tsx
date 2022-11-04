/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Router from 'next/router';
import { CustomNextPageContext } from './intefaces';

const redirectURL = '/';

const checkAuth = (ctx: CustomNextPageContext) => {
	const { authUser } = ctx;
	if (authUser && authUser.token) return { auth: true };
	return { auth: false };
};

const withoutAuth = (WrappedComponent: any) => {
	const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

	hocComponent.getInitialProps = async (ctx: CustomNextPageContext) => {
		const userAuth = checkAuth(ctx);

		if (userAuth?.auth) {
			if (ctx.res) {
				ctx.res.writeHead(302, { location: redirectURL });
				ctx.res.end();
			} else {
				Router.push(redirectURL);
			}
		} else if (WrappedComponent.getInitialProps) {
			const wrappedProps = await WrappedComponent.getInitialProps({ ...ctx, userAuth });
			return { ...wrappedProps, userAuth };
		}

		return { userAuth };
	};

	return hocComponent;
};

export default withoutAuth;
