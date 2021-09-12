import React from 'react';

const FlexRow = ( { children, className, justify, align } ) => {
	const classes = [ 'd-flex', className ];
	if ( justify ) {
		classes.push( 'justify-content-' + justify );
	}

	if ( align ) {
		classes.push( 'align-items-' + align );
	}

	return <div className={ classes.join( ' ' ) }>{ children }</div>;
};

export default FlexRow;
