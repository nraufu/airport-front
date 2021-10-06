import PrintHeaderCompany from './partials/PrintHeaderCompany';
import PrintInfo from './partials/PrintInfo';
import Logo from '../../assets/images/logo.png';

const PrintHeader = () => {
    const infos = {
        logo: Logo,
        companyInfo: {
            name: 'Kigali International Airport',
            phone: '+250 0780 000 000',
            email: 'info@kia.com',
            address: 'Kigali, Rwanda',
            website: 'https://kigali-airport.herokuapp.com/',
        },
    };

    return (
        <>
            <div className='print-header'>
                <div className='print-header__col'>
                    <div className='print-header__logo-wrapper'>
                        <img src={infos.logo} alt='Company Logo' />
                    </div>
                    <div className='ml-4 d-flex flex-column justify-content-center'>
                        <PrintHeaderCompany companyInfo={infos.companyInfo} />
                    </div>
                </div>

                <div className='print-header__col'>
                    <PrintInfo />
                </div>
            </div>
            {/* { title && (
				<h4 className="print-title text-center mb-3">{ title }</h4>
			) } */}
        </>
    );
};

export default PrintHeader;
