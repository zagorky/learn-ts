class HttpError extends Error {
  status: number;

  constructor(public error: number, public message: string) {
    super(message)
    this.status = error;
    this.message = message;
  }
}

class NotFoundError extends HttpError {
  constructor(public message: string,) {
    super(404, message)
  }
}

class UnauthorizedError extends HttpError {
  constructor(public message: string) {
    super(401, message)
  }
}

class ForbiddenError extends HttpError {
  constructor(public message: string) {
    super(403, message)
  }
}


export {NotFoundError, UnauthorizedError, ForbiddenError}
