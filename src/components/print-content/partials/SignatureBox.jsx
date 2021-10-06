const SignatureBox = ( { title } ) => {
	return (
		<div className="footer-signature-box">
			<span className="footer-signature-box__signature"></span>
			<h6 className="mb-0">{ title }</h6>
		</div>
	);
};

export default SignatureBox;
