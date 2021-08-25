const express = require('express');
const router = express.Router();
const { Game } = require('../db/models');
const { asyncHandler } = require('./utils');

router.get('/', asyncHandler( async (req, res, next) => {
  const games = await Game.findAll();
  res.render('gameCollection.pug', { title: 'Arcade Academy', games });
}));

router.get(`/:id(\\d+)`, asyncHandler( async (req, res, next) => {
  const gameId = parseInt(req.params.id, 10)
  const game = await Game.findByPk(gameId);

  res.render('game.pug', { title: `AA-${game.name}`, game });
}));

router.get('/topGames', asyncHandler(async(req,res) => {
  const topGames = await Game.findAll({ limit: 10 });

  res.render('topTen.pug', {
    title: 'Top Games',
    topGames
  })
}));

module.exports = router;
