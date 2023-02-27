"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);
  app.route("/show").get(jsonku.tampilkanMhs);
  app.route("/show/:id").get(jsonku.tampilkanMhsById);

  app.route("/post").post(jsonku.tambahkanMhs);

  app.route("/update").put(jsonku.ubahMhs);

  app.route("/delete").delete(jsonku.hapusMhs);

  app.route("/showMakul").get(jsonku.tampilkanMakul);
};
