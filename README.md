# deno_template

![Deno Template CI](https://github.com/rjoydip/deno_template/workflows/Deno%20Template%20CI/badge.svg)
![Deno Template Release CI](https://github.com/rjoydip/deno_template/workflows/Deno%20Template%20Release%20CI/badge.svg)

> Simple deno template to start from scratch.

## Install

```sh
deno install -f --name deno-template https://raw.githubusercontent.com/rjoydip/deno_template/master/cli.ts
```

## Usage CLI

```sh
$ deno-template --help

  Example
    $ deno-template deno
    Hello deno
```

## How to import

```ts
const { greeting } = "https://raw.githubusercontent.com/rjoydip/deno_template/master/cli.ts"; // import from github as raw data
// OR
const { greeting } = "https://deno.land/x/deno_template/cli.ts"; // If module is uploaded into deno.land
```

## Usage API

```ts
const { greeting } = "https://raw.githubusercontent.com/rjoydip/deno_template/master/cli.ts";
greeting("deno"); //=> Hello deno
```
