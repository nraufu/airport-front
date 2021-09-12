import { Fragment } from 'react';

const ContentBox = ({ title, children, className }) => {
    const classes = ['content-box', className];
    return (
        <div className={classes.join(' ')}>
            {title && (
                <h5 className='content-box__title'>
                    <span>{title}</span>
                </h5>
            )}
            <div className='content-box__content'>{children}</div>
        </div>
    );
};

const Heading = ({ title, subTitle }) => (
    <>
        <h3 className='mb-4'>
            <b>{title}</b>
        </h3>
        {subTitle && <h6>{subTitle}</h6>}
    </>
);

const InfoBox = ({ title, subTitle, children }) => {
    return (
        <div className='p-5 bg-white'>
            <p className='mb-0 text-secondary'>{subTitle}</p>
            <h1 className='text-primary mb-2'>{title}</h1>

            {children &&
                children.map((child, index) => {
                    return (
                        <p className='mb-0' key={index}>
                            {child}
                        </p>
                    );
                })}
        </div>
    );
};

const SummaryBox = ({ direction, cta, items }) => {
    direction = direction || 'left';
    items = items || [];

    return (
        <div className={`text-${direction}`}>
            {items.map((item, index) => (
                <Fragment key={index}>
                    <p className='mb-0'>{item.label}</p>
                    <h5>{item.value}</h5>
                </Fragment>
            ))}

            <span className='mt-4'>{cta}</span>
        </div>
    );
};

const DateBox = ({ date, prefix }) => (
    <span>{`${prefix} ${new Date(date).toLocaleDateString()} `}</span>
);

export { ContentBox, Heading, InfoBox, SummaryBox, DateBox };
