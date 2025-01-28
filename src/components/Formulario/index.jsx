import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {
    let [seuPeso, setSeuPeso] = useState(0);
    let [suaAltura, setSuaALtura] = useState(0);

    const renderizaResultado = () => {
        if (seuPeso === 0 || suaAltura === 0) {
            return null;  // Não renderiza nada se os campos não estiverem preenchidos
        }

        const imc = seuPeso / (suaAltura * suaAltura);

        if (imc >= 30) {
            return <p>Classificação do IMC: Obesidade</p>;
        }
        if (imc >= 25) {
            return <p>Classificação do IMC: Sobrepeso</p>;
        }
        if (imc >= 18.5) {
            return <p>Classificação do IMC: Peso ideal (normal)</p>;
        }
        return <p>Classificação do IMC: Abaixo peso ideal</p>;
    };

    return (
        <form className={styles.form}>
            <input
                type="number"
                placeholder="Seu peso"
                onChange={evento => setSeuPeso(parseFloat(evento.target.value))}
            />
            <input
                type="number"
                placeholder="Sua altura"
                onChange={evento => setSuaALtura(parseFloat(evento.target.value))}
            />
            {renderizaResultado()}
        </form>
    );
};

export default Formulario;
