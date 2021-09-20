const PageLink = ( { page, label, onClick, disabled, isActive } ) => {
	const classes = [ 'page-item' ];
	if ( disabled ) classes.push( 'disabled' );
	if ( isActive ) classes.push( 'active' );

	return (
		<li className={ classes.join( ' ' ) }>
			<button
				onClick={ () => onClick( parseInt( page ) ) }
				className="page-link"
				disabled={ disabled }
			>
				<span
					aria-hidden="true"
					title={ page ? `Page ${ page }` : label }
				>
					{ label }
				</span>
			</button>
		</li>
	);
};

export default PageLink;
