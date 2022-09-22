let livros = []

class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade
}

class Biblioteca {
    Nome
    Endereco
    Telefone

    BuscarLivro(nomeParametro) {
        livros.forEach(nome => {
            if (nomeParametro == nome.Titulo) {
                console.log(nome.Titulo, nome.Autor, nome.Editora, nome.AnoDePublicacao, nome.Disponibilidade)
            }
        })
    }

    EmprestarUmLivro(nomeParametro) {
        let emprestimo = false
        livros.forEach(nome => {
            if (nomeParametro == nome.Titulo) {
                if (nome.Disponibilidade) {
                    nome.Disponibilidade = false
                    emprestimo = true
                }

            }
        })
        return emprestimo
    }
}

let primeiroLivro = new Livro()
primeiroLivro.Titulo = "titulo 1"
primeiroLivro.Autor = "autor 1"
primeiroLivro.Editora = "editora 1"
primeiroLivro.AnoDePublicacao = 2000
primeiroLivro.Disponibilidade = true

livros.push(primeiroLivro)

let segundoLivro = new Livro()
segundoLivro.Titulo = "titulo 2"
segundoLivro.Autor = "autor 2"
segundoLivro.Editora = "editora 2"
segundoLivro.AnoDePublicacao = 2005
segundoLivro.Disponibilidade = false

livros.push(segundoLivro)

let terceiroLivro = new Livro()
terceiroLivro.Titulo = "titulo 3"
terceiroLivro.Autor = "autor 3"
terceiroLivro.Editora = "editora 3"
terceiroLivro.AnoDePublicacao = 2010
terceiroLivro.Disponibilidade = true

livros.push(terceiroLivro)

let primeiraBiblioteca = new Biblioteca()
primeiraBiblioteca.Nome = "Biblioteca 1"
primeiraBiblioteca.Endereco = "End 1"
primeiraBiblioteca.Telefone = "Telefone 1"
primeiraBiblioteca.BuscarLivro(segundoLivro.Titulo)
console.log(primeiraBiblioteca.EmprestarUmLivro(segundoLivro.Titulo))



