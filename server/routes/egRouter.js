const Router = require('express').Router;
const egRouter = Router();
const knex = require(__dirname + '/../../knex').knex;
const jsonParser = require('body-parser').json();

module.exports = {
    egRouter: egRouter
};

egRouter.post('/sample', jsonParser, (req, res, next) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;


    knex('sample')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists)=>{
        if(exists){
        // TODO: if email already exists throw exists error 400
        }
        const insertSample = { name, email };
        return knex('sample')
        .insert(insertSample, '*');

    })
    .then((rows)=>{
        console.log('rows');
        const the_sample = rows[0];
        res.send(the_sample);
    })

    .catch((err)=>{
        next(err);
    });
});

egRouter.get('/sample', (req, res, next) =>{
    knex('sample')
        .then((rows)=>res.send(rows))
        .catch((err)=>{
            console.log(err)
            .then((err)=>{
                next(err);
            });
        });
});

egRouter.get('/sample/:id', (req, res, next) => {
    console.log(req.params.id);
    knex('sample')
    .then((rows) => {
        console.log(rows[req.params.id - 1]);
        res.send(rows[req.params.id - 1]);
    })
    .catch((err) =>
    console.log(err)
    .then((err)=>{
        next(err);
    })

);
});


// TODO: create put route

// TODO: create delete route
