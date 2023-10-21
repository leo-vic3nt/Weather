export { LocationNotFound, ApiInternalError, GenericError, GeolocationRequestError };

class LocationNotFound extends Error {
    constructor(location: string) {
        super(`
            The location ${location} was not found.
        `);
    }
}

class ApiInternalError extends Error {
    constructor() {
        super("Internal Error");
    }
}

class GenericError extends Error {
    constructor() {
        super("Something went wrong... Please try again later");
    }
}

class GeolocationRequestError extends Error {
    constructor(geolocationError: GeolocationPositionError) {
        super(`Geolocation error: ${geolocationError.message}`);
    }
}
