import { HttpError } from "./HttpError";

export class HttpNotFound extends HttpError {
    constructor(message = 'Not Found') {
        super(message, 404);
        this.name = 'HTTP_Not_Found';
    }
}