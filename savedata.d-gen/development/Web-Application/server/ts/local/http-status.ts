
export interface IStatusResponse {
    status: number,
    msg: string,
    mimetype?: string,
    content?: any
}

export class HTTPStatus {
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.3
     *
     * The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.
     */
    public static ACCEPTED: IStatusResponse = { status: 202, msg: "ACCEPTED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.3
     *
     * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
     */
    public static BAD_GATEWAY: IStatusResponse = { status: 502, msg: "BAD_GATEWAY" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.1
     *
     * This response means that server could not understand the request due to invalid syntax.
     */
    public static BAD_REQUEST: IStatusResponse = { status: 400, msg: "BAD_REQUEST" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.8
     *
     * This response is sent when a request conflicts with the current state of the server.
     */
    public static CONFLICT: IStatusResponse = { status: 409, msg: "CONFLICT" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.1
     *
     * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
     */
    public static CONTINUE: IStatusResponse = { status: 100, msg: "CONTINUE" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.2
     *
     * The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.
     */
    public static CREATED: IStatusResponse = { status: 201, msg: "CREATED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.14
     *
     * This response code means the expectation indicated by the Expect request header field can't be met by the server.
     */
    public static EXPECTATION_FAILED: IStatusResponse = { status: 417, msg: "EXPECTATION_FAILED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.5
     *
     * The request failed due to failure of a previous request.
     */
    public static FAILED_DEPENDENCY: IStatusResponse = { status: 424, msg: "FAILED_DEPENDENCY" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.3
     *
     * The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.
     */
    public static FORBIDDEN: IStatusResponse = { status: 403, msg: "FORBIDDEN" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.5
     *
     * This error response is given when the server is acting as a gateway and cannot get a response in time.
     */
    public static GATEWAY_TIMEOUT: IStatusResponse = { status: 504, msg: "GATEWAY_TIMEOUT" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.9
     *
     * This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
     */
    public static GONE: IStatusResponse = { status: 410, msg: "GONE" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.6
     *
     * The HTTP version used in the request is not supported by the server.
     */
    public static HTTP_VERSION_NOT_SUPPORTED: IStatusResponse = { status: 505, msg: "HTTP_VERSION_NOT_SUPPORTED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2324#section-2.3.2
     *
     * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
     */
    public static IM_A_TEAPOT: IStatusResponse = { status: 418, msg: "IM_A_TEAPOT" };
    /**
     * UNOFFICIAL w/ NO DOCS
     */
    public static INSUFFICIENT_SPACE_ON_RESOURCE: IStatusResponse = { status: 419, msg: "INSUFFICIENT_SPACE_ON_RESOURCE" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6
     *
     * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
     */
    public static INSUFFICIENT_STORAGE: IStatusResponse = { status: 507, msg: "INSUFFICIENT_STORAGE" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.1
     *
     * The server has encountered a situation it doesn't know how to handle.
     */
    public static INTERNAL_SERVER_ERROR: IStatusResponse = { status: 500, msg: "INTERNAL_SERVER_ERROR" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.10
     *
     * Server rejected the request because the Content-Length header field is not defined and the server requires it.
     */
    public static LENGTH_REQUIRED: IStatusResponse = { status: 411, msg: "LENGTH_REQUIRED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.4
     *
     * The resource that is being accessed is locked.
     */
    public static LOCKED: IStatusResponse = { status: 423, msg: "LOCKED" };
    /**
   * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.5
   *
   * The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
   */
    public static METHOD_NOT_ALLOWED: IStatusResponse = { status: 405, msg: "METHOD_NOT_ALLOWED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.2
     *
     * This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.
     */
    public static MOVED_PERMANENTLY: IStatusResponse = { status: 301, msg: "MOVED_PERMANENTLY" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.3
     *
     * This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
     */
    public static MOVED_TEMPORARILY: IStatusResponse = { status: 302, msg: "MOVED_TEMPORARILY" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.2
     *
     * A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
     */
    public static MULTI_STATUS: IStatusResponse = { status: 207, msg: "MULTI_STATUS" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.1
     *
     * The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.
     */
    public static MULTIPLE_CHOICES: IStatusResponse = { status: 300, msg: "MULTIPLE_CHOICES" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-6
     *
     * The 511 status code indicates that the client needs to authenticate to gain network access.
     */
    public static NETWORK_AUTHENTICATION_REQUIRED: IStatusResponse = { status: 511, msg: "NETWORK_AUTHENTICATION_REQUIRED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.5
     *
     * There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
     */
    public static NO_CONTENT: IStatusResponse = { status: 204, msg: "NO_CONTENT" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.4
     * This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
     */
    public static NON_AUTHORITATIVE_INFORMATION: IStatusResponse = { status: 203, msg: "NON_AUTHORITATIVE_INFORMATION" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.6
     *
     * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
     */
    public static NOT_ACCEPTABLE: IStatusResponse = { status: 406, msg: "NOT_ACCEPTABLE" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.4
     *
     * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
     */
    public static NOT_FOUND: IStatusResponse = { status: 404, msg: "NOT_FOUND" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.2
     *
     * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
     */
    public static NOT_IMPLEMENTED: IStatusResponse = { status: 501, msg: "NOT_IMPLEMENTED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.1
     *
     * This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.
     */
    public static NOT_MODIFIED: IStatusResponse = { status: 304, msg: "NOT_MODIFIED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.1
     *
     * The request has succeeded. The meaning of a success varies depending on the HTTP method:
     * GET: The resource has been fetched and is transmitted in the message body.
     * HEAD: The entity headers are in the message body.
     * POST: The resource describing the result of the action is transmitted in the message body.
     * TRACE: The message body contains the request message as received by the server
     */
    public static OK: IStatusResponse = { status: 200, msg: "OK" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.1
     *
     * This response code is used because of range header sent by the client to separate download into multiple streams.
     */
    public static PARTIAL_CONTENT: IStatusResponse = { status: 206, msg: "PARTIAL_CONTENT" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.2
     *
     * This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.
     */
    public static PAYMENT_REQUIRED: IStatusResponse = { status: 402, msg: "PAYMENT_REQUIRED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7538#section-3
     *
     * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     */
    public static PERMANENT_REDIRECT: IStatusResponse = { status: 308, msg: "PERMANENT_REDIRECT" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.2
     *
     * The client has indicated preconditions in its headers which the server does not meet.
     */
    public static PRECONDITION_FAILED: IStatusResponse = { status: 412, msg: "PRECONDITION_FAILED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-3
     *
     * The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
     */
    public static PRECONDITION_REQUIRED: IStatusResponse = { status: 428, msg: "PRECONDITION_REQUIRED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.1
     *
     * This code indicates that the server has received and is processing the request, but no response is available yet.
     */
    public static PROCESSING: IStatusResponse = { status: 102, msg: "PROCESSING" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.2
     *
     * This is similar to 401 but authentication is needed to be done by a proxy.
     */
    public static PROXY_AUTHENTICATION_REQUIRED: IStatusResponse = { status: 407, msg: "PROXY_AUTHENTICATION_REQUIRED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-5
     *
     * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
     */
    public static REQUEST_HEADER_FIELDS_TOO_LARGE: IStatusResponse = { status: 431, msg: "REQUEST_HEADER_FIELDS_TOO_LARGE" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.7
     *
     * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
     */
    public static REQUEST_TIMEOUT: IStatusResponse = { status: 408, msg: "REQUEST_TIMEOUT" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.11
     *
     * Request entity is larger than limits defined by server, the server might close the connection or return an Retry-After header field.
     */
    public static REQUEST_TOO_LONG: IStatusResponse = { status: 413, msg: "REQUEST_TOO_LONG" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.12
     *
     * The URI requested by the client is longer than the server is willing to interpret.
     */
    public static REQUEST_URI_TOO_LONG: IStatusResponse = { status: 414, msg: "REQUEST_URI_TOO_LONG" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.4
     *
     * The range specified by the Range header field in the request can't be fulfilled, it's possible that the range is outside the size of the target URI's data.
     */
    public static REQUESTED_RANGE_NOT_SATISFIABLE: IStatusResponse = { status: 416, msg: "REQUESTED_RANGE_NOT_SATISFIABLE" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.6
     *
     * This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
     */
    public static RESET_CONTENT: IStatusResponse = { status: 205, msg: "RESET_CONTENT" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.4
     *
     * Server sent this response to directing client to get requested resource to another URI with an GET request.
     */
    public static SEE_OTHER: IStatusResponse = { status: 303, msg: "SEE_OTHER" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.4
     *
     * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
     */
    public static SERVICE_UNAVAILABLE: IStatusResponse = { status: 503, msg: "SERVICE_UNAVAILABLE" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.2
     *
     * This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
     */
    public static SWITCHING_PROTOCOLS: IStatusResponse = { status: 101, msg: "SWITCHING_PROTOCOLS" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.7
     *
     * Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
     */
    public static TEMPORARY_REDIRECT: IStatusResponse = { status: 307, msg: "TEMPORARY_REDIRECT" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-4
     *
     * The user has sent too many requests in a given amount of time ("rate limiting").
     */
    public static TOO_MANY_REQUESTS: IStatusResponse = { status: 429, msg: "TOO_MANY_REQUESTS" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.1
     *
     * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
     */
    public static UNAUTHORIZED: IStatusResponse = { status: 401, msg: "UNAUTHORIZED" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.3
     *
     * The request was well-formed but was unable to be followed due to semantic errors.
     */
    public static UNPROCESSABLE_ENTITY: IStatusResponse = { status: 422, msg: "UNPROCESSABLE_ENTITY" };
    /**
     * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.13
     *
     * The media format of the requested data is not supported by the server, so the server is rejecting the request.
     */
    public static UNSUPPORTED_MEDIA_TYPE: IStatusResponse = { status: 415, msg: "UNSUPPORTED_MEDIA_TYPE" };

}
