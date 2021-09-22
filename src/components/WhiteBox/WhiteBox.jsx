import React from 'react';
import { Sparklines, SparklinesBars } from 'react-sparklines';

const WhiteBox = ({ title, number }) => {
    const sampleData = [0, 5, 6, 10, 9, 12, 4, 9];

    return (
        <div class='col-lg-3 col-md-12'>
            <div class='white-box analytics-info'>
                <h3 class='box-title'>{title}</h3>
                <ul class='list-inline two-part d-flex align-items-center mb-0'>
                    <li>
                        <Sparklines
                            data={sampleData}
                            limit={5}
                            width={67}
                            height={30}
                            style={{
                                display: 'inline-block',
                                width: '67px',
                                height: '30px',
                                verticalAlign: 'top',
                            }}
                        >
                            <SparklinesBars />
                        </Sparklines>
                    </li>
                    <li class='ms-auto'>
                        <span class='counter text-info'>{number}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WhiteBox;
