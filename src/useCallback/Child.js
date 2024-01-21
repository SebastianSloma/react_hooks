import { useEffect } from 'react';

function Child({ returnComment }) {
	useEffect(() => {
		console.log('FUNCTION WAS CALLED');
	}, [returnComment]);

	return <div>{returnComment('useCallback')}</div>;
}

export default Child;
