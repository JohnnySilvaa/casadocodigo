const db = require('../../config/database');
const LivroDao = require('../infra/livro-dao');

//página inicial
module.exports = (app) => {
    app.get('/', function(req, resp){

        resp.send(`
                    <html>
                        <head>
                            <meta charset="utf-8">
                        </head>
                        <body>
                            <h1>Casa do Código</h1>
                        </body>
                    </html>
                `);
    });
      
//listagem de livros    
    app.get('/livros', function(req, resp){

        const livroDao = new LivroDao(db);
        livroDao.lista()
            .then(livros => resp.marko(
                    require('../views/livros/lista/lista.marko'),
                    {
                        livros: livros
                    }
                ))
            .catch(erro => copnsole.log(erro));
    });
//formulario de cadastro
    app.get('/livros/form/', function(req, resp){
        resp.marko(require('../views/livros/form/form.marko'),{livro: {}});
    });

//formulário de edição
    app.get('/livros/form/:id', function(req, resp){
        const id = req.params.id;
        const livroDao = new LivroDao(db);

        livroDao.buscaPorId(id)
        .then(livro =>
            resp.marko(require('../views/livros/form/form.marko'),
                        {livro: livro}
            )
        )
        .catch(erro => console.log(erro));
    });

 //busca por id   
    app.get('/livros/:id', function(req, resp){
        const livroDao = new LivroDao(db);
        const livro = livroDao.buscaPorId(req.params.id)
        .then(livro => resp.marko(
            resp.marko(require('../views/livros/atualiza/atualiza.marko')),
            {
                livro: livro
            }
        ))
        .catch(erro => copnsole.log(erro));
    });

    app.post('/livros', function(req, resp){
        console.log(req.body);

        const livroDao = new LivroDao(db);
        livroDao.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => copnsole.log(erro));
     });
     
     app.put('/livros', function(req, resp){
        const livroDao = new LivroDao(db);
        livroDao.atualiza(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => copnsole.log(erro));
     });

     app.delete('/livros/remover/:id', function(req, resp){
        const id = req.params.id;
        const livroDao = new LivroDao(db);
        livroDao.remove(id)
         .then(() => resp.status(200).end)
         .catch(erro => copnsole.log(erro));
    });
    
          
}