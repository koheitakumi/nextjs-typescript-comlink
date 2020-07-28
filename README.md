# TypeScript Next.js and Web Worker or Comlink example

This is a really simple project that shows the usage of Next.js with TypeScript, Web Worker and Comlink.

## Article for more detail.

- English [https://file-translate.com/en/blog/nextjs-with-web-worker](https://file-translate.com/en/blog/nextjs-with-web-worker)
- 日本語 [https://file-translate.com/ja/blog/nextjs-with-web-worker](https://file-translate.com/ja/blog/nextjs-with-web-worker)

## How to use it?

### Using `create-next-app`

Execute [`git clone`](https://git-scm.com/docs/git-clone) to download this project in your computer. And execute install dependencies with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

1. Download this project with git

   ```bash
   git clone https://github.com/koheitakumi/nextjs-typescript-comlink.git
   ```

   or [download zip file](https://github.com/koheitakumi/nextjs-typescript-comlink/archive/master.zip) and unzip it.

1. Install dependencies

   ```bash
   cd nextjs-typescript-comlink && npm  install
   # or
   cd nextjs-typescript-comlink && yarn install
   ```

1. Bootstrap this example

   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Notes

1. TypeScript

   This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

   ```
   npm install --save-dev typescript
   ```

   To enable TypeScript's features, we install the type declarations for React and Node.

   ```
   npm install --save-dev @types/react @types/react-dom @types/node
   ```

   When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

   Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

   A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.

1. Web Worker

   This example uses [`worker-plugin`](https://www.npmjs.com/package/worker-plugin) according to the Next.js's official example [`with-web-worker`](https://github.com/vercel/next.js/tree/canary/examples/with-web-worker).

   To learn more, please visit each sites. It could be helpful for you!

   I show you some notes to support Web Worker.

   - Add `webworker` library in `tsconfig.json`. It recognize the grammar of Web Worker.

     ```json
     {
         "compilerOptions": {
             :
             "lib": ["dom", "es2017", "webworker"],
             :
         }
     }
     ```

   - Add `next.config.js` to recognize `self` object.

     ```js
     const WorkerPlugin = require("worker-plugin");

     module.exports = {
       webpack: (
         config,
         { buildId, dev, isServer, defaultLoaders, webpack }
       ) => {
         if (!isServer) {
           config.plugins.push(
             new WorkerPlugin({
               // use "self" as the global object when receiving hot updates.
               globalObject: "self",
             })
           );
         }
         return config;
       },
     };
     ```

1. Comlink

   [Comlink](https://github.com/GoogleChromeLabs/comlink) is very good library to make the Web Worker enjoyable. It would enhance the Web Worker for any applications.

See you!
