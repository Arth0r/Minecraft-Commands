module.exports = new (class cmd{
    constructor(){
        this.name = "head"; // nome do comando
        this.category = "minecraft" // estilo da categoria
        this.help = "Veja a minha lista de comandos"; // sistema de help do cmd
        this.cooldown = 3; //delay
        this.cdMessage = "Aguarde 3 segundos para usar o comando novamente"; // mensagem
        this.aliases = ["ajuda","cmds","commands"]  // aliases
    }
    run({message,buildMessage,client,args}){
    var player = args.join(' ')
    if(!player) return message.reply("voce deve me dar um nick");
     var url = `https://minotar.net/cube/` + `${player}` + `/100.png`
     message.channel.send({
         embed: {
             image:{
                 url: url
             },
             author: {
                 name: `${message.author.username}#${message.author.discriminator} esta aqui o resultado da sua pesquisa`
             },
             color: 0x00FFFF
            }
        })
    }
})
