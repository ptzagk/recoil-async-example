import React from 'react';
import { useRecoilValue } from 'recoil';
import { fetchUserDetailsWithAtom } from './store/selector';

function DetailsWithSuspense() {
    const userDetailsWithAtom = useRecoilValue(fetchUserDetailsWithAtom);
    const { data } = userDetailsWithAtom;
    
    return (
        data.map(item => (
            <div key={item.id}>
                <p>{`Email: ${item.email} Name: ${item.first_name} ${item.last_name}`}</p>
            </div>
        ))
    );
}

export default DetailsWithSuspense;
