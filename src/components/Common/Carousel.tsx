import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import NextImg from 'next/image';
import { Image } from 'react-bootstrap';

export const Carousel: FC<PropsType> = (props) => {
	const { data, navigation, clickable, slides, space, bordered, clickHandler, type, bulletIcon = false } = props;

	const handleSliderClick = (el: dataType,i:number) => {
		clickHandler(el,i);
	};

	console.log('azim  bhai',data);
	

	return (
		<Wrapper type={type} className="my-3 p-0">
			<Swiper
				slidesPerView={slides}
				spaceBetween={space}
				navigation={navigation}
				pagination={{
					enabled: bulletIcon,
					clickable: clickable,
				}}
				modules={[Pagination, Navigation]}
				className="p-0 m-0"
			>
				{data?.length > 0 &&
					data?.map((el, i) => {
						return (
							<SwiperSlide
								onClick={() => handleSliderClick(el,i)}
								key={i}
								style={{ cursor: 'pointer' }}
								className={type === 'icon' ? 'p-5 border rounded slider_comp' : ''}
							>
								<ContentWrapper type={type}>
									{type === 'icon' ? (
										<>
											<IconImage src={el?.iconUrl} alt='image' height={30} width={30} />
											<Title>{el?.title}</Title>
										</>
									) : type === 'image' ? (
										<>
											<ImageWrapper>
												<Image src={el?.imageUrl} className="w-100 h-100" />
												<Text className="text_view">Click To View</Text>
											</ImageWrapper>
											<Title className="text-center mt-2" style={{ fontSize: '1rem' }}>
												{el?.title}
											</Title>
										</>
									) : null}
								</ContentWrapper>
							</SwiperSlide>
						);
					})}
			</Swiper>
		</Wrapper>
	);
};

const ContentWrapper = styled.div<{ bordered?: boolean; type?: 'icon' | 'image' }>`
	width: 100%;
	${(props) => {
		switch (props.type) {
			case 'icon':
				return css``;
			case 'image':
				return css`
					/* margin: 0 1rem; */
					/* border-radius: 1rem;
					overflow: hidden; */
				`;
			default:
				return css``;
		}
	}}
`;

const Text = styled.p`
	z-index: 100;
	border: 1px solid #ffffff;
	color: #ffffff;
	font-size: 0.825rem;
	padding: 0.425rem;
	position: absolute;
	top: 50%;
	left: 50%;
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	transition: 0.4s;
`;

const Wrapper = styled.div<{ type?: 'icon' | 'image' }>`
	.slider_comp {
		transition: 0.3s;
		&:hover {
			background-color: #fafafa;
		}
	}

	${(props) => {
		switch (props.type) {
			case 'icon':
				return css`
					border: 1px solid #ececec;
					padding: 1rem;
					border-radius: 0.25rem;
					box-shadow: 0px 0px 10px 3px #ececec;
				`;
			case 'image':
				return css``;
			default:
				return css``;
		}
	}}
`;

const ImageWrapper = styled.div`
	border-radius: 1rem;
	overflow: hidden;
	position: relative;
	
	.text_view {
		display: none;
		transition: 0.4s;
	}
	z-index: 99;
	&:before {
		position: absolute;
		background-color: #040108a1;
		z-index: 100;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 0;
		transition: 0.3s;
	}
	&:hover {
		transition: 0.4s;
		.text_view {
			display: block !important;
			
		}
		&:before {
			height: 100%;
		}
	}
`;

const IconImage = styled(NextImg)``;

const ImageCard = styled.div``;

const Title = styled.p`
	font-size: 0.825rem;
	font-weight: 600;
	
`;

type dataType = {
	iconUrl?:string;
	imageUrl: string;
	title: string;
};

type PropsType = {
	bulletIcon?: boolean;
	data: dataType[];
	clickable?: boolean;
	navigation?: boolean;
	slides: number;
	space: number;
	bordered?: boolean;
	clickHandler?: (el,i) => any;
	type: 'icon' | 'image';
};
