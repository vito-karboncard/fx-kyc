const fs = require("fs");
const path = require("path");
const iconTypeGroup = [];
const writeFileName = "icon-types.ts";
const iconFilename = "iconfont-svg.js";
const http = require("http");
const commandArg = process.argv.slice(2)[0];
const httpArgs = commandArg.split(".com");
const httpHost = httpArgs[0].split("//")[1] + ".com";
const httpPath = httpArgs[1];
const option = { host: httpHost, path: httpPath };
const fetchSvgFile = (cb) => {
  let fileContent = "";
  const fileName = iconFilename;
  http
    .get(option, (res) => {
      res.on("data", (chunk) => (fileContent += chunk));
      res.on("end", () => {
        fs.writeFile(
          path.join(__dirname, fileName),
          fileContent,
          "utf8",
          (err) => {
            if (err) {
              console.log(err);
            }
            console.log(`write ${fileName} successfully`);
            cb();
          }
        );
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
};
const parseSvgFile = (filename, cb) => {
  fs.readFile(
    path.resolve(__dirname, filename),
    {
      encoding: "utf8",
    },
    (err, data) => {
      if (err) {
        throw err;
      } else {
        const reg = /id="([\da-zA-Z-]+)"/g;
        const match = data.matchAll(reg);
        const types = [...match].map((matched) => `"${matched[1]}"`);
        console.log("-> types", types);
        iconTypeGroup.push(...types);
        if (cb) {
          cb();
        }
      }
    }
  );
};
const writeTypeFile = (fileName) => {
  const template = `
    export type IconTypes = ${iconTypeGroup.join("|")}
  `;
  fs.writeFile(path.join(__dirname, fileName), template, "utf8", (err) => {
    if (!err) {
      console.log(`write ${fileName} successfully`);
    }
  });
};
const generateType = () => {
  parseSvgFile(iconFilename, () => {
    writeTypeFile(writeFileName)
  });
};

fetchSvgFile(generateType);
