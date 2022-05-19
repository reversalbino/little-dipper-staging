import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import * as imageActions from '../../store/images';


export default function SearchBar() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { query } = useParams();

    const [searchTerm, setSearchTerm] = useState(query ? query : '');

    function search(e) {
		e.preventDefault();

		if(searchTerm === '') {
			return;
		}
		else {
            history.push(`/search/${searchTerm}`)
		}
	}

    return(
        <form onSubmit={search}>
            <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search'
            />
        </form>
    )
}
