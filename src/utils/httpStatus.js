/*** 
Descriptive HTTP status codes, for code readability.
See RFC 2616 and RFC 6585.
RFC 2616: http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
RFC 6585: http://tools.ietf.org/html/rfc6585
*/


const STATUS = {};

// Informational - 1xx
STATUS.HTTP_100_CONTINUE = 100
STATUS.HTTP_101_SWITCHING_PROTOCOLS = 101

// Successful - 2xx
STATUS.HTTP_200_OK = 200
STATUS.HTTP_201_CREATED = 201
STATUS.HTTP_202_ACCEPTED = 202
STATUS.HTTP_203_NON_AUTHORITATIVE_INFORMATION = 203
STATUS.HTTP_204_NO_CONTENT = 204
STATUS.HTTP_205_RESET_CONTENT = 205
STATUS.HTTP_206_PARTIAL_CONTENT = 206

// Redirection - 3xx
STATUS.HTTP_300_MULTIPLE_CHOICES = 300
STATUS.HTTP_301_MOVED_PERMANENTLY = 301
STATUS.HTTP_302_FOUND = 302
STATUS.HTTP_303_SEE_OTHER = 303
STATUS.HTTP_304_NOT_MODIFIED = 304
STATUS.HTTP_305_USE_PROXY = 305
STATUS.HTTP_306_RESERVED = 306
STATUS.HTTP_307_TEMPORARY_REDIRECT = 307

// Client Error - 4xx
STATUS.HTTP_400_BAD_REQUEST = 400
STATUS.HTTP_401_UNAUTHORIZED = 401
STATUS.HTTP_402_PAYMENT_REQUIRED = 402
STATUS.HTTP_403_FORBIDDEN = 403
STATUS.HTTP_404_NOT_FOUND = 404
STATUS.HTTP_405_METHOD_NOT_ALLOWED = 405
STATUS.HTTP_406_NOT_ACCEPTABLE = 406
STATUS.HTTP_407_PROXY_AUTHENTICATION_REQUIRED = 407
STATUS.HTTP_408_REQUEST_TIMEOUT = 408
STATUS.HTTP_409_CONFLICT = 409
STATUS.HTTP_410_GONE = 410
STATUS.HTTP_411_LENGTH_REQUIRED = 411
STATUS.HTTP_412_PRECONDITION_FAILED = 412
STATUS.HTTP_413_REQUEST_ENTITY_TOO_LARGE = 413
STATUS.HTTP_414_REQUEST_URI_TOO_LONG = 414
STATUS.HTTP_415_UNSUPPORTED_MEDIA_TYPE = 415
STATUS.HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE = 416
STATUS.HTTP_417_EXPECTATION_FAILED = 417
STATUS.HTTP_428_PRECONDITION_REQUIRED = 428
STATUS.HTTP_429_TOO_MANY_REQUESTS = 429
STATUS.HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE = 431

// Server Error - 5xx
STATUS.HTTP_500_INTERNAL_SERVER_ERROR = 500
STATUS.HTTP_501_NOT_IMPLEMENTED = 501
STATUS.HTTP_502_BAD_GATEWAY = 502
STATUS.HTTP_503_SERVICE_UNAVAILABLE = 503
STATUS.HTTP_504_GATEWAY_TIMEOUT = 504
STATUS.HTTP_505_HTTP_VERSION_NOT_SUPPORTED = 505
STATUS.HTTP_511_NETWORK_AUTHENTICATION_REQUIRED = 511

//exports
module.exports = STATUS;