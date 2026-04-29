# Directus' OpenAPI Specification

This repo contains the OpenAPI specifications for [Directus' API](https://www.directus.io/docs/api).

The static spec in this repo contains all the system endpoints and a definition for a generic `/items/{collection}` endpoint.

> [!IMPORTANT]
> If you are experiencing issues with the OpenAPI Specification on your cloud or self hosted instance (https://your-instance.directus.cloud/server/specs/oas), report the issue [Directus/Directus](https://github.com/directus/directus).

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

## Adding an Endpoint

Endpoints that allow for requests that createSingular and createMultiple on the same path have an invisible special character appended to their record at `openapi/index.yaml`. Copy the code block below and change `<endpoint>` to the path of your endpoint.

```yaml
  "/<endpoint>":
    $ref: paths/<endpoint>/index.yaml
  "/<endpoint>‎":
    $ref: paths/<endpoint>/singular/index.yaml
  "/<endpoint>/{id}":
    $ref: paths/<endpoint>/_id/index.yaml
```

Take extra care not to delete the special character by using Find and Replace in your IDE.

## Deploying Releases

To deploy a new release to npm:

1. Bump the version in `package.json` via a PR and merge it into `main`
2. Run the [release workflow](https://github.com/directus/openapi/actions/workflows/release.yml)
