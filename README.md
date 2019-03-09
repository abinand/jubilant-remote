
# Node JS Exercise

## Running the example

### Hosting the api

#### Method 1 - Docker

On Windows, the following command can be executed

```console
/assignment1> execute-build.cmd
```

This would build a docker image with the Dockerfile in the assignment directory, run a container with the image and open the default browser to the linked port on docker machine IP (assumed 192.168.99.100).
To clean up the image and containers, use:

```console
/assignment1>execute-teardown.cmd
```

#### Method 2 - From Node console

```console
/assignment1> npm install
/assignment1> npm start
```

or

```console
/assignment1> yarn
/assignment1> yarn start
```

The app runs localhost on port 8000

### Calling the api

* The default **"GET /"** of the api returns the json result of running the filter with the input values provided in the problem description.

* To filter using custom data, the **"POST /custom"** endpoint can be called with request body in the following schema

```json
{
    "settings":[ ...],
    "components": [...]
}
```

### Running tests

```console
/assignment1> npm test
```

or

```console
/assignment1>yarn test
```

## Solution Comments

### Assumptions and Prerequisites

* It is assumed that the component names are case sensitive
* It is assumed that the json passed to the core filter function is correctly constructed. There is only a basic schema validation on the post body

### Logic

The filter function maps components to their names. The resulting array of names is passed to the array filter for settings object. If the number of common (intersection) values is positive, the setting is retained.
