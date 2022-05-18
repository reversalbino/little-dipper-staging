import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import * as imageActions from '../../store/images';


export default function SearchBar() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { term } = useParams();

    const [searchTerm, setSearchTerm] = useState(term ? term : '');

    function search(e) {
		e.preventDefault();

		if(searchTerm === '') {
			return;
		}
		else {
            console.log('\n\nSEARCH TERM: ', searchTerm, '\n\n')
            history.push(`/search/${searchTerm}`)
            window.location.reload(false);
			// return <Redirect to={`/search/${searchTerm}`} />
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
