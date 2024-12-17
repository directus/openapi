# Directus' OpenAPI Specification

This repo contains the OpenAPI specifications for Directus' API.

The static spec in this repo contains all the system endpoints and a definition for a generic `/items/{collection}` endpoint.

## Usage

The spec is exported in 3 formats: `.yaml`, `.json`, and `.js`. The JS file is just an `export` of the same JSON but parsed into JS for ease of use in JS projects.

## Requirements

The specification is written to work with OpenAPI version 3 and up.

## Vendor Extensions

The spec relies on two vendor-specific fields to represent information required by the system:

### `x-collection`

Key that maps a system endpoint to its corresponding system collection. 

### `x-codeSamples`

Examples of how to use the equivalent of the documented REST endpoint in the JS SDK and/or GraphQL endpoint.
