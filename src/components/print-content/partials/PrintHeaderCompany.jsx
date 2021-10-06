const PrintHeaderCompany = ({ companyInfo }) => {
    return (
        <div className='print-header__company'>
            <h4 className='mb-3'>{companyInfo.name}</h4>
            {companyInfo.phone && (
                <p className='mb-0'>Phone: {companyInfo.phone}</p>
            )}
            <p className='mb-0'>Address: {companyInfo.address}</p>
            <p className='d-flex mb-0'>
                {companyInfo.email && <span>Email: {companyInfo.email}</span>}
            </p>
        </div>
    );
};

export default PrintHeaderCompany;
