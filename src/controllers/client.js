import mongoose from 'mongoose';
import service from './../service';

var Client  = mongoose.model('CLIENT');

// GET - Return all Clients in the DB
exports.findAllClients = function (req, res) {  
  Client.find(function (err, clients) {
    if (err) {
      res.send(500, err.message);
    };
    console.log('GET /clients');
    res.status(200).jsonp(clients);
  });
};

// GET - Return a Client with specified NAME
exports.findByName = function (req, res) {  
  Client.findOne({ 'name' : req.params.id }, function (err, client) {
    if (err) {
      return res.send(500, err.message);
    };
    console.log('GET /client/' + req.params.id);
    res.status(200).jsonp(client);
  });
};

// POST - Insert a new Client in the DB
exports.addClient = function (req, res) {  
  console.log('POST');
  console.log(req.body);

  var client = new Client(req.body);

  client.save(function (err, clientSaved) {
    if (err) {
      return res.status(500).send( err.message);
    };
    res.status(200).jsonp(clientSaved);
  });
};

// PUT - Update a register already exists
exports.updateClient = function (req, res) {  
  Client.findOne({ 'name' : req.params.id }, function (err, client) {
    client.name = req.body.name;
    client.projects = req.body.projects;
    client.contacts = req.body.contacts;
    client.milestones = req.body.milestones;
    client.save(function (errSave) {
      if (errSave) {
        return res.status(500).send(errSave.message);
      };
      res.status(200).jsonp(client);
    });
  });
};

// DELETE - Delete a Client with specified ID
exports.deleteClient = function (req, res) {  
  Client.findById(req.params.id, function (err, client) {
    client.remove(function (errRemove) {
      if (errRemove) {
        return res.status(500).send(errRemove.message);
      };
      res.status(200).send();
    });
  });
};

// POST - Validate a Contact with specified email Client
exports.validateClient = function (req, res) {  
  Client.findOne( { 'name' : req.params.id }, function (err, client) {
    if (err) {
      return res.send(500);
    };
    var userData = {};
    let auth = false;
    client.projects.map((project)=>{
      userData.thisProject = project;
      project.contacts.map((contact)=>{
        if (contact.password === req.body.password && contact.email === req.body.email ) {
          auth = true;
          userData.thisContact = contact;
        }
      });
    });

    userData.token = service.createToken(userData.thisContact.email);

    if (!auth ) {
      return res.send(500);
    }
    console.log('POST ' + req.params.id + '/validate');
    res.status(200).jsonp(userData);
  });
};
