export class LocationNotFound extends Error {
    constructor(location: string) {
        super(`
            The location ${location} was not found
        `);
    }
}

export class ApiInternalError extends Error {
    constructor() {
        super("Internal Error");
    }
}

export class GenericError extends Error {
    constructor() {
        super("Something went wrong... Please try again later");
    }
}

export class GeolocationRequestError extends Error {
    constructor(geolocationError: GeolocationPositionError) {
        super(`Geolocation error: ${geolocationError.message}`);
    }
}
