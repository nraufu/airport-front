import { useEffect, useState } from 'react';
import PageLink from './PageLink';

function Pagination({ currentPage, itemsCount, onPageChange }) {
    const [pageInputVal, setPageInputVal] = useState(currentPage);

    useEffect(() => {
        setPageInputVal(currentPage);
    }, [currentPage]);

    const pagesCount = Math.ceil(itemsCount / 25);
    // pagesCount = pagesCount || 0;
    currentPage = currentPage || 1;
    const maxPages = pagesCount < 8 ? pagesCount : 8;

    const getFirstPage = () => {
        const page = currentPage - (currentPage % 8);

        if (page === 0) return 1;
        return page;
    };

    const getLastPage = () => {
        if (pagesCount <= 1) return 1;
        if (firstPage === 1) return maxPages;
        const last = firstPage + maxPages;

        return last >= pagesCount ? pagesCount : last;
    };

    const PageButtons = [];
    const firstPage = getFirstPage();
    const lastPage = getLastPage();

    const changePage = (page) => {
        onPageChange(page);
    };

    PageButtons.push(
        <PageLink
            label='Prev'
            key='prevBtn'
            disabled={currentPage === 1}
            page={currentPage - 1}
            onClick={() => changePage(currentPage - 1)}
        />
    );

    for (let i = firstPage; i <= lastPage; i++) {
        PageButtons.push(
            <PageLink
                page={i}
                label={i}
                key={i}
                isActive={currentPage === i}
                onClick={() => changePage(i)}
            />
        );
    }

    if (pagesCount > maxPages && pagesCount - firstPage > maxPages) {
        PageButtons.push(<PageLink label='...' key='s0' disabled={true} />);
        PageButtons.push(
            <PageLink
                label={pagesCount}
                key={pagesCount}
                page={pagesCount}
                onClick={() => changePage(pagesCount)}
            />
        );
    }

    PageButtons.push(
        <PageLink
            label='Next'
            page={currentPage + 1}
            key='nextBtn'
            disabled={currentPage === pagesCount}
            onClick={() => changePage(currentPage + 1)}
        />
    );

    return (
        <div className='pagination-container d-flex justify-content-center align-items-center no-print'>
            <div className='d-flex align-items-center'>
                <nav className='pagination pagination-container__nav'>
                    {PageButtons}
                </nav>

                <span className='pagination-container__input-container'>
                    <input
                        type='text'
                        className='form-control no-print'
                        value={pageInputVal}
                        onChange={(e) => {
                            setPageInputVal(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                const page = parseInt(e.target.value);
                                if (page > pagesCount) return false;
                                changePage(page);
                            }
                        }}
                        placeholder='Page'
                    />
                </span>
            </div>
            <span className='text-secondary ml-3'>
                Showing page {currentPage} / {pagesCount}
            </span>
        </div>
    );
}

export default Pagination;
