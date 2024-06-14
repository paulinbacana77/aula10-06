export default class Cliente{
    constructor(id, nome, cnpj){
        this.id = id
        this.nome = nome
        this.cnpj = cnpj
        this.ativo = true
        this.observacao = ""
    }
    
    estaAtivo(){
        return this.ativo
    }
}