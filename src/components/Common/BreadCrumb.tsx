import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { FC } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

export const BreadCrumbPanel: FC = () => {
	return (
		<Wrapper>
            <Breadcrumb>
			<Breadcrumb.Item>
				<Link href="/">
					<HomeOutlined />
				</Link>
			</Breadcrumb.Item>

			<Breadcrumb.Item className="text-white">
				<Link href="/appliar_service">Appliance Service</Link>
			</Breadcrumb.Item>

			<Breadcrumb.Item>Gas Stove or Burner Repair</Breadcrumb.Item>
		</Breadcrumb>
        </Wrapper>
	);
};
const Wrapper = styled.div`
	/* .ant-breadcrumb {
		li {
			color: #ffffff !important;
			font-weight: 600;
			font-size: 14px;
			span {
				a {
					color: #ffffff;
                    font-size: 14px;
				}
			}
		}
	} */
`;

const Link = styled(NextLink)``;
