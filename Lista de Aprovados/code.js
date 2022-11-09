function code(entries) {

    const aprovados = entries.filter((entry) => entry.nota >= 5)
    const aprovadosNomes = aprovados.map((aprovado)=> aprovado.nome)
    return aprovadosNomes
}

code([{ nota: 10, nome: "Lucas" }, { nota: 4, nome: "João" }, { nota: 7, nome: "Maria" }])
module.exports = code
