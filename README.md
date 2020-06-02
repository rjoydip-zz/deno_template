# deno-greeting ![ci](https://github.com/rjoydip/deno-greeting/workflows/ci/badge.svg)

> Simple greeting (deno)

## Install

```sh
deno install -f --name dg https://raw.githubusercontent.com/rjoydip/deno-greeting/master/cli.ts
```

## Usage CLI

```sh
$ dg --help

  Example
    $ dg deno
    Greeting: deno
```

## Usage API

```ts
const { greeting } = "https://raw.githubusercontent.com/rjoydip/deno-greeting/master/cli.ts";
greeting("deno"); //=> Greeting: deno
```
