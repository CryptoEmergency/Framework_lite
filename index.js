import { ServerInit, ServerBuild, ServerStart } from "@betarost/cemserver";
// import { schemaMongo, connectMongo } from "./mongoose/export.js";
// import { startSocket } from "./socket/export.js"
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const port = 80;
const portApi = 11001;
let hotReload = true;
const target = "cryptodev.store";
const mode = "development";

if (process.env.DISABLERELOAD) {
  hotReload = false;
}

const start = async function () {
  // await schemaMongo()
  // await connectMongo()
  // await startSocket(portApi)

  ServerInit({
    target,
    hotReload,
    path: {
      src: path.resolve("app.js"),
      public: path.resolve("public"),
      fileName: "main.js",
    },
    port,
    mode,
    allowedHosts: ["cem.cryptodev.store", target],
    // proxy: {
    //   "/api/v2": {
    //     target: "http://127.0.0.1:" + portApi,
    //     changeOrigin: true,
    //     secure: false,
    //     ws: true
    //   },
    // },
  });
  ServerBuild({}).then((result) => {
    if (result) ServerStart(result);
  });
};

start();