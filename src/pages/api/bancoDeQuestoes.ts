import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(201, 'Qual é o triângulo que tem todos os lados diferentes?', [
        new RespostaModel('Equilátero', false),
        new RespostaModel('Isóceles', false),
        new RespostaModel('Trapézio', false),
        new RespostaModel('Escaleno', true) 
    ]),
    new QuestaoModel(202, 'Quem compôs o Hino da Independência?', [
        new RespostaModel('Castro Alves', false),
        new RespostaModel('Manuel Bandeira', false),
        new RespostaModel('Carlos Gomes', false),
        new RespostaModel('Dom Pedro I', true) 
    ]),
    new QuestaoModel(203, 'Qual é o antônimo de "malograr"?', [
        new RespostaModel('Perder', false),
        new RespostaModel('Fracassar', false),
        new RespostaModel('Desprezar', false),
        new RespostaModel('Conseguir', true) 
    ]),
    new QuestaoModel(204, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        new RespostaModel('Costa e Silva', false),
        new RespostaModel('Emílio Médici', false),
        new RespostaModel('Ernesto Geisel', false),
        new RespostaModel('João Figueiredo', true) 
    ]),
    new QuestaoModel(205, 'O adjetivo "venoso" está relacionado a:', [
        new RespostaModel('Vela', false),
        new RespostaModel('Vento', false),
        new RespostaModel('Vênia', false),
        new RespostaModel('Veia', true) 
    ]),
    new QuestaoModel(206,'Que nome se dá à purificação por meio da água?', [
        new RespostaModel('Abrupção', false),
        new RespostaModel('Abolição', false),
        new RespostaModel('Abnegação', false),
        new RespostaModel('Ablução', true) 
    ]),
    new QuestaoModel(207, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        new RespostaModel('Monte Branco', false),
        new RespostaModel('Monte Fuji', false),
        new RespostaModel('Monte Carlo', false),
        new RespostaModel('Monte Everest', true) 
    ]),
    new QuestaoModel(208, 'Em que parte do corpo se encontra a epiglote?', [
        new RespostaModel('Estômago', false),
        new RespostaModel('Pâncreas', false),
        new RespostaModel('Rim', false), 
        new RespostaModel('Pescoço', true) 
    ]),
    new QuestaoModel(209, 'A compensação por perda é chamada de...', [
        new RespostaModel('Déficit', false),
        new RespostaModel('Indexação', false),
        new RespostaModel('Indébito', false), 
        new RespostaModel('Indenização', true) 
    ]),
    new QuestaoModel(301, 'Quem é o "patrono" do Exército Brasileiro?', [
        new RespostaModel('Marechal Deodoro', false),
        new RespostaModel('Barão de Mauá', false),
        new RespostaModel('Marquês de Pombal', false), 
        new RespostaModel('Duque de Caxias', true) 
    ]),
    
]

export default questoes