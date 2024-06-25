# The code in this repo is the literal copy of code that follows [the Module Federation Quick Start Guide](https://module-federation.io/practice/frameworks/next/index.html)

## Micro Frontend Apps composition and their roles

There are two Micro Frontend apps in this repo; namely the Producer (mfe2) and the Consumer (mfe1).

## Starting the apps

Since the Producer should be live before the Consumer attempts to load it on the root Host app, we start the Producer first and then the Consumer.
Follow this order:

1. Starting the Producer via CLI at root of project: $`(cd mfe2; pnpm run dev)`
2. Starting the Consumer via at root of project: $`(cd mfe1; pnpm run dev)`
3. Click on the starting URLs provided by the Command Line output

Altenatively use the Makefile `dev` target if your local setup is configured for use of make commands.

* `$make dev` uses parallel execution to start up both of the Micro Frontends.

Or if you prefer to start each individually, these Make targets are available as well.

* `$make dev-mfe2` will start up (just) the Producer.
* `$make dev-mfe1` will start up (just) the Host.
