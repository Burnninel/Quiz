import styles from "../styles/Questionario.module.css";
import QuestaoModel from "../model/questao";
import Questao from "./Questao";
import Botao from "./Botao";

interface Questionarioprops {
  questao: QuestaoModel;
  ultima: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irPraProximoPasso: () => void;
}

export default function Questionario(props: Questionarioprops) {
  function respostaFornecida(indice: number) {
    if(props.questao.naoRespondida) {
        props.questaoRespondida(props.questao.responderCom(indice))
    }
  }

  return (
    <div className={styles.questionario}>
        {props.questao ?
            <Questao
                valor={props.questao}
                tempoParaResposta={10}
                respostaFornecida={respostaFornecida}
                tempoEsgotado={props.irPraProximoPasso}
            />
            : false
        }
      <Botao
        onClick={props.irPraProximoPasso}
        texto={props.ultima ? "Finalizar" : "Próxima"}
      />
    </div>
  );
}
 