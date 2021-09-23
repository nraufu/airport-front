import { useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Row,
} from 'reactstrap';
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';
import classnames from 'classnames';
import WhiteBox from '../../components/WhiteBox/WhiteBox';
import {
    chartDepartures,
    chartFlights,
    chartOptions,
    parseOptions,
} from './variables/charts';

const General = () => {
    const [activeArrivalNav, setActiveArrivalNav] = useState(1);
    const [activeDepartureNav, setActiveDepartureNav] = useState(1);
    const [chartData1, setChartData1] = useState('data1');
    const [chartData2, setChartData2] = useState('data1');

    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveArrivalNav(index);
        setChartData1('data' + index);
    };

    const toggleNavs2 = (e, index) => {
        e.preventDefault();
        setActiveDepartureNav(index);
        setChartData2('data' + index);
    };

    const activities = [
        { title: 'Total Visit', number: 48 },
        { title: 'Total Airline', number: 20 },
        { title: 'Today arrivals', number: 10 },
        { title: 'Today departures', number: 10 },
    ];

    return (
        <>
            {/* cards */}
            <div class='row justify-content-center'>
                {activities.map((activity, index) => (
                    <WhiteBox
                        key={index}
                        title={activity.title}
                        number={activity.number}
                    />
                ))}
            </div>

            <Row>
                <Card className='bg-gradient-default shadow flex-column report-chart'>
                    <CardHeader className='bg-transparent'>
                        <Row className='align-items-center justify-content-between'>
                            <div className='col-lg-6'>
                                <h6 className='text-uppercase text-dark mb-2 sub-title'>
                                    Overview
                                </h6>
                                <h2 className='mb-0 title'>Arrival Flights</h2>
                            </div>

                            <div className='col-lg-6'>
                                <Nav className='justify-content-end' pills>
                                    <NavItem>
                                        <NavLink
                                            className={classnames('py-2 px-3', {
                                                active: activeArrivalNav === 1,
                                            })}
                                            href='#pablo'
                                            onClick={(e) => toggleNavs(e, 1)}
                                        >
                                            <span className='d-none d-md-block'>
                                                Monthly
                                            </span>
                                            <span className='d-md-none'>M</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames('py-2 px-3', {
                                                active: activeArrivalNav === 2,
                                            })}
                                            data-toggle='tab'
                                            href='#pablo'
                                            onClick={(e) => toggleNavs(e, 2)}
                                        >
                                            <span className='d-none d-md-block'>
                                                Weekly
                                            </span>
                                            <span className='d-md-none'>W</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        {/* Chart */}
                        <div className='chart'>
                            <Line
                                data={chartFlights[chartData1]}
                                options={chartFlights.options}
                                getDatasetAtEvent={(e) => console.log(e)}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Row>

            <Row className='my-5'>
                <Card className='bg-gradient-default shadow flex-column report-chart'>
                    <CardHeader className='bg-transparent'>
                        <Row className='align-items-center justify-content-between'>
                            <div className='col-lg-6'>
                                <h6 className='text-uppercase text-dark mb-2 sub-title'>
                                    Overview
                                </h6>
                                <h2 className='mb-0 title'>
                                    Departure Flights
                                </h2>
                            </div>

                            <div className='col-lg-6'>
                                <Nav className='justify-content-end' pills>
                                    <NavItem>
                                        <NavLink
                                            className={classnames('py-2 px-3', {
                                                active:
                                                    activeDepartureNav === 1,
                                            })}
                                            href='#pablo'
                                            onClick={(e) => toggleNavs2(e, 1)}
                                        >
                                            <span className='d-none d-md-block'>
                                                Monthly
                                            </span>
                                            <span className='d-md-none'>M</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames('py-2 px-3', {
                                                active:
                                                    activeDepartureNav === 2,
                                            })}
                                            data-toggle='tab'
                                            href='#pablo'
                                            onClick={(e) => toggleNavs2(e, 2)}
                                        >
                                            <span className='d-none d-md-block'>
                                                Weekly
                                            </span>
                                            <span className='d-md-none'>W</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        {/* Chart */}
                        <div className='chart'>
                            <Line
                                data={chartDepartures[chartData2]}
                                options={chartDepartures.options}
                                getDatasetAtEvent={(e) => console.log(e)}
                            />
                        </div>
                    </CardBody>
                </Card>
            </Row>
        </>
    );
};

export default General;
