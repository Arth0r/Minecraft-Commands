module.exports = new (class cmd{
    constructor(){
        this.name = "banner"; // nome do comando
        this.category = "util" // estilo da categoria
        this.help = "Veja a minha lista de comandos"; // sistema de help do cmd
        this.cooldown = 3; //delay
        this.cdMessage = "Aguarde 3 segundos para usar o comando novamente"; // mensagem
        this.aliases = []  // aliases
    }
    run({message,buildMessage,client,args}){
     var player = args.join(' ')
    if(!player) return message.reply("voce deve me dar um servidor");
     var url = `https://use.gameapis.net/mc/query/banner/` + `${player}` + `:25565/nether,caps`
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
