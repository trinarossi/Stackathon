const Sequelize = require("sequelize");
const db = require("../db");

const Flashcard = db.define("flashcard", {
  question: {
    type: Sequelize.TEXT,
    allowNull: false,
    allowEmpty: false
  },
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
    allowEmpty: false
  },
})

module.exports = Flashcard;