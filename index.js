const fs = require("fs");

const express = require("express");

require("dotenv").config();

const app = express();

app.listen({ port: process.env.PORT }, () => console.log("running"));
