import React from "react";
import "./Card.css";

const frasesPorTemperatura = {
  frio: [
    "Tá na hora do casaco!",
    "Brrr... que friaca!",
    "Tempo bom pra um chocolate quente.",
    "Se sair, leve o cachecol!",
    "Nem calor, nem frio... 0 graus tá ótimo",
  ],
  ameno: [
    "Clima gostoso, hein?",
    "Dia perfeito pra um passeio.",
    "Nem frio, nem calor... só curtir.",
    "Temperatura agradável!",
  ],
  quente: [
    "Tá pegando fogo, bicho!",
    "Dia de sorvete e sombra.",
    "Use protetor solar!",
    "Água, sombra e descanso!",
  ],
};

function obterFrasePorTemperatura(temp) {
  if (temp < 15) {
    return frasesPorTemperatura.frio[
      Math.floor(Math.random() * frasesPorTemperatura.frio.length)
    ];
  } else if (temp >= 15 && temp <= 25) {
    return frasesPorTemperatura.ameno[
      Math.floor(Math.random() * frasesPorTemperatura.ameno.length)
    ];
  } else {
    return frasesPorTemperatura.quente[
      Math.floor(Math.random() * frasesPorTemperatura.quente.length)
    ];
  }
}

const Card = ({ data }) => {
  if (!data) return null;

  const temperatura = Math.round(data.main.temp);
  const frase = obterFrasePorTemperatura(temperatura);

  return (
    <div className="card">
      <div className="card__cabec">
        <div className="city__name">{data.name}</div>
      </div>
      <div className="card__body">
        <div className="city__temp">{temperatura}°C</div>
        <div className="city__minmax">
          <div className="city__min">
            Min: {Math.round(data.main.temp_min)}°C
          </div>
          <div className="city__max">
            Max: {Math.round(data.main.temp_max)}°C
          </div>
        </div>
      </div>
      <div className="card__footer">
        <div>{frase}</div>
      </div>
    </div>
  );
};

export default Card;
