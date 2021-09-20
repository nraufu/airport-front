import _ from 'lodash';

const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
}

export const getPagedData = (filterCol, currentPage, sortColumn, searchQuery, data) => {
    let filtered = data;
    
    if (searchQuery) {
        filtered = data.filter(item => item[filterCol].toLowerCase().includes(searchQuery.toLowerCase()));
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const pagedData = paginate(sorted, currentPage, 25);

    return {totalCount: filtered.length, pagedData};
};
