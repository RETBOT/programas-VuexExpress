var controlador = require('../../../../controladores/peliculas.js')
const Pelicula = require('./../../../../modelos/Pelicula');
var server = require('../../../../server');
let chai = require('chai');
let sinon = require('sinon');
const expect = chai.expect;
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
var should = chai.should();
//var express = require('express');
//var server = require('../../../../server');
//var app = express();

describe('modelos.Peliculas', function() {
  it('exists', function() {
    expect(Pelicula).to.exist
  });
});

describe('controladores.Peliculas', function() {
  it('exists', function() {
    expect(controlador).to.exist
  });
});

describe('/GET peliculas', () => {
 it('Debe enviar todas las peliculas', (done) => {
  var pelicula1 = {
    nombre: 'prueba1',
    descripcion: 'prueba1',
    anho_pub: 2017,
    genero: 'prueba1',
  };

  var pelicula2 = {
    nombre: 'prueba2',
    descripcion: 'prueba2',
    anho_pub: 2018,
    genero: 'prueba2',
  };

  var peliculasEsperadas = (pelicula1, pelicula2);
  sinon.mock(Pelicula)
    .expects('find')
    .yields('', peliculasEsperadas);
  
  chai.request(server)
   .get('/peliculas')
   .end((err, res) => {
    res.should.have.status(200);
    res.body.should.be.an('object');
    expect(res.body).to.equal({
      peliculas: peliculasEsperadas
    });
    done();
   });
});
});

describe('POST /peliculas', () => {
  it('debe responder con la pelicula que fue agregada', (done) => {
    chai.request(server)
     .post('/peliculas')
     .send({
      nombre: 'prueba1',
      descripcion: 'prueba1',
      anho_pub: 2019,
      genero: 'prueba1',
     })
     .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(200);
        res.body.should.be.an('objecct');
        res.body.should.include.keys(
          '_id', 'nombre', 'descripcion', 'anho_pub', 'genero'
        );
        done();
     });
  });
})

// function buildResponse() {
//   return http_mocks.createResponse({eventEmitter:
//     require('events').eventEmitter});
// }

// describe('controladores.peliculas.js', function(){
//   it ('existe', function(){
//     expect(controlador).to.exist;
//   });
// });

// describe('/GET prueba_simple', () => {
//   it('debe de responder con un nombre de objeto', (done) => {
//     chai.request(server)
//     .get('/prueba_simple')
//     .end((err, res) => {
//       res.should.have.status(200);
//       res.body.should.be.an('object');
//       done();
//     })
//   });
// })