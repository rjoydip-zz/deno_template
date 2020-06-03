# deno_greeting ![ci](https://github.com/rjoydip/deno_greeting/workflows/ci/badge.svg)

> Simple greeting template (deno)

## Install

```sh
deno install -f --name dg https://raw.githubusercontent.com/rjoydip/deno_greeting/master/cli.ts
```

## Usage CLI

```sh
$ deno-greeting --help

  Example
    $ deno-greeting deno
    Greeting: deno
```

## Usage API

```ts
const { greeting } = "https://raw.githubusercontent.com/rjoydip/deno_greeting/master/cli.ts";
greeting("deno"); //=> Greeting: deno
```
