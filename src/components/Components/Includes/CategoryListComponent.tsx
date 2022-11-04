import React, {FC} from 'react';

export const CategoryListComponent:FC<any> = ({item}) => {
    return (
        <div>
            {item.title}
        </div>
    );
};
