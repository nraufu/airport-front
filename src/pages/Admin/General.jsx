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
import { chartExample1, chartOptions, parseOptions } from './variables/charts';

const General = () => {
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState('data1');

    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        setChartExample1Data('data' + index);
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
                <Card className='bg-gradient-default shadow flex-column'>
                    <CardHeader className='bg-transparent'>
                        <Row className='align-items-center justify-content-between'>
                            <div className='col-lg-6'>
                                <h6 className='text-uppercase text-dark ls-1 mb-1'>
                                    Overview
                                </h6>
                                <h2 className='mb-0'>Flight Arrivals</h2>
                            </div>

                            <div className='col-lg-6'>
                                <Nav className='justify-content-end' pills>
                                    <NavItem>
                                        <NavLink
                                            className={classnames('py-2 px-3', {
                                                active: activeNav === 1,
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
                                                active: activeNav === 2,
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
                                data={chartExample1[chartExample1Data]}
                                options={chartExample1.options}
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
