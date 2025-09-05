const HttpStatus = {
    OK: { code: 200, message: 'OK' },
    CREATED: { code: 201, message: 'CREATED' },
    BAD_REQUEST: { code: 400, message: 'BAD_REQUEST' },
    INTERNAL_SERVER_ERROR: { code: 500, message: 'INTERNAL_SERVER_ERROR' },
    NO_CONTENT: { code: 204, message: 'NO_CONTENT' },
    NOT_FOUND: { code: 404, message: 'NOT_FOUND' }
};
export default HttpStatus;