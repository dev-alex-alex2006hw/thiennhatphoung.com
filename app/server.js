"use strict";

const koa = require("koa");
const passport = require("koa-passport");
const errorHandler = require("koa-error");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");
const Router = require("koa-router");

var cfenv = require('cfenv');

const app = module.exports = koa();
app.use(logger());
app.use(errorHandler());
app.use(bodyParser());
app.use(passport.initialize());

app.use(require('koa-static')(__dirname + '/../public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
var router = new Router();

router.use(function *(next) {
  // everything json
  this.type = "json";
  this.headers['accept'] = "application/json";
  yield next;
});


var secured = require('./secured')
var auth    = require("./auth");
var posts   = require("./posts");
var follows = require("./follows");

router.post("/api/signup",  auth.createUser);
router.post("/api/login",   auth.loginUser);
router.get ("/api/account", secured, auth.getCurrentUser);
router.post("/api/posts", secured, posts.createPost);
router.get ("/api/posts/:username", posts.userPosts);
router.get ("/api/follows/:username", follows.userFollows);

app.use(router.routes());
const PORT = appEnv.port || 3000;
app.listen( PORT, '0.0.0.0');
console.log("Server started, listening on port: ", PORT);
