import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(false);
  const [mensagem, setMensagem] = useState("Gostaria de realizar uma avaliação de IMC?");

  const handleButtonClick = () => {
    setFormularioEstaVisivel(!formularioEstaVisivel);
    if (!formularioEstaVisivel) {
      setMensagem("Digite aqui sua altura e peso para calcularmos o IMC");
    } else {
      setMensagem("Gostaria de realizar uma avaliação de IMC?");
    }
  };

  return (
    <>
      <Header />
      <div className="centralizado">
        <h2>{mensagem}</h2>
        {formularioEstaVisivel && <Formulario />}
        <button
          className="button"
          onClick={handleButtonClick}
          type="button"
        >
          Iniciar avaliação
        </button>
      </div>
    </>
  );
}

export default App;
