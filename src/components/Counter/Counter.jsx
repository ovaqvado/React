import React, { useState } from 'react';
import Button from '@mui/material/Button';


export function Counter(props) {

	const [counter, setCounter] = useState(0);
	

	const handleClick = () => {
		setCounter(counter + props.add)
	}


		return ( 
			<>
		<Button variant="outlined" color="error" onClick={handleClick}>+{props.add}</Button>
		<div>{counter}</div>
		</>
		)
	}


