//some node js built in modules include --os,fs,http,crypto
const osmodule = require("os");

const fsmodule = require("fs");

fsmodule.readFile("../css/intro.css", "utf-8", (err,content) => {
  if (err) {
    console.log(err);
  } else {
    console.log(content.toUpperCase());
  }
})


/*fsmodule.mkdir("helloFolder", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file created successfully");
  }
});*/

//console.log(osmodule.networkInterfaces());

/*fsmodule.unlink("./go.html", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file deleted successfully");
  }
})
*/
