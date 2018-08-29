var express = require('express');
var router = express.Router();
const Note = require('../models/notes');

// Create a new Note
router.post('/notes', function(req, res, next){
  Note.create(req.body).then(function(note){
    res.send(note);
  }).catch(next);
});

// Retrieve all Notes
router.get('/notes', function(req, res, next){
  Note.find({}).then(function(notes){
  res.send(notes);
  });
});

// Retrieve a single Note with noteId
//app.get('/notes/:noteId', notes.findOne);

// Update a Note with noteId
router.put('/notes/:id', function(req, res, next){
  Note.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Note.findOne({_id: req.params.id}).then(function(note){
      res.send(note);
    });
  });
});

// Delete a Note with noteId
router.delete('/notes/:id', function(req, res, next){
  Ninja.findByIdAndRemove({_id: req.params.id}).then (function(note){
    res.send(note);
  });
});

module.exports = router;