var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    "UserName":"Georges",
    "UserId":"6A6DCD62-5EBE-4D92-906B-F5532C47EF21",
    "Mail":"georges@mail.com",
    "Bio":"coucou c'est moi Georges",
    "ProfilePicture":"https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi4k-yf04XnAhXt8OAKHeJ-AtIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.jumpstarttech.com%2Fchanging-your-network-profile%2F&psig=AOvVaw3rFlYWZtB6tDD5WD-4WKik&ust=1579179241618639"})
});

module.exports = router;
