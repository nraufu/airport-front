//function to append _SUCCESS or _FAIL to action Types
export const success = ( type ) => `${ type }_SUCCESS`;
export const fail = ( type ) => `${ type }_FAIL`;
