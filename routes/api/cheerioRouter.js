const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");
const axios = require("axios");
const cheerio = require("cheerio");

router.post("/auditions", function(req, res){
  var final = [];
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
          result.position = $(this)
          .children("a")
          .children("div.post_item_inner")
          .children("div.post_item_body")
          .children("div.post_text_col")
          .children("div.post_item_info")
          .text()
          result.image = $(this)
          .children("a")
          .children("div.post_item_inner")
          .children("div.post_item_body")
          .children("div.post_image_col")
          .children("div.post_image")
          .children("img.src")
          .text();
          result.link = $(this)
          .children("a")
          .attr("href")
          result.date = $(this)
          .children("a")
          .children("div.post_item_inner")
          .children("div.post_item_body")
          .children("div.post_text_col")
          .children("div.post_item_closingdate")
          .children("span.preserve_case")
          .text();
          
          console.log(result);
          final.push(result);
        })
        res.send(final);
      })

    
}
)


module.exports = router;