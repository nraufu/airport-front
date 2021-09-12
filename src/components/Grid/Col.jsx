import React from 'react';

const Col = ( { children, xs, sm, md, lg, className } ) => {
	md = md ? md : 12;
	lg = lg ? lg : 12;
	sm = sm ? sm : 12;
	xs = xs ? xs : 12;
	return (
		<>
			<div
				className={ `col-${ xs } col-md-${ md } col-lg-${ lg } col-sm-${ sm } ${
					className || ''
				}` }
			>
				{ children }
			</div>
		</>
	);
};

export default Col;
