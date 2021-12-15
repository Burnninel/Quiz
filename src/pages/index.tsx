import Botao from "../components/Botao";
import styles from "../styles/Inicio.module.css";

export default function Home() {
  return (
    <div className={styles.inicio}>
        <div className={styles.nomeDoQuiz}>
            <h1>Quizando</h1>
        </div>
        <div className={styles.conteudo}>
            <p>E ai? Vamos testar seus conhecimentos? <br></br> Faça o QUIZ e veja seu desempenho em conhecimentos gerais!</p>
            <Botao texto="Iniciar Jogo" href="/jogo" />
        </div>
      </div>
  );
}
