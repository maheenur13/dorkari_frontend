import Image from 'next/image';
import React, { FC } from 'react';

export const CardComp: FC<any> = ({ item, type }) => {

	return (
		<div>
			{type === 'image' && <Image src={item?.image} width={160} height={160} />}
			{type === 'card' && (
				<div>
					<Image src={item?.image} width={160} height={160} />
                    <h6>{item?.title}</h6>
                    <h5>BDT {item?.price}</h5>
				</div>
			)}
		</div>
	);
};
