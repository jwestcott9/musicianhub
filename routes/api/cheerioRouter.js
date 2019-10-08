const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");


router.post("/auditions", function(req, res){
    axios.get("https://www.musicalchairs.info/cello/jobs").then(function(response){
        var $ = cheerio.load(response.data);
        $("li.preview").each(function (i, element){
          var result = {};
          result.title = $(this)
          .children ("a")
          .children("div.post_item_inner")
          .children("div.post_item_body")
          .children("div.post_text_col")
          .children("div.post_item_name")
          .text();
        })
      })

      res.send(result);
}
)

module.exports = router;