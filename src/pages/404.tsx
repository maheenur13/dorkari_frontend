import { Button, Result } from 'antd';
import { useRouter } from 'next/router';

export default function Custom404() {
	const router = useRouter();
	return (
		<div style={{maxHeight:'100vh',overflow:'hidden'}}>
			<Result
				className="bg-white h-100 m-5 rounded"
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={
					<Button type="primary" onClick={() => router.push('/')}>
						Back Home
					</Button>
				}
			/>
		</div>
	);
}
