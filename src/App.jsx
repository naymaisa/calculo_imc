import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(false);

  return (
    <>
      <Header />
      <div className="centralizado">
        <h2>Gostaria de realizar uma avaliação de IMC?</h2>
        {formularioEstaVisivel && <Formulario />}
        <button
          className="button"
          onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}
          type="button"
        >
          Iniciar avaliação
        </button>
      </div>
    </>
  );
}

export default App;
