import React, { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState(null);

  const calculaIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));
  };

  function ClassificacaoIMC(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
      return "Peso em excesso";
    } else if (imc >= 30 && imc <= 34.9) {
      return "Obesidade grau 1";
    } else if (imc >= 35 && imc <= 39.9) {
      return "Obesidade grau 2 (severa)";
    } else {
      return "Obesidade grau 3 (mórbida)";
    }
  }

  return (
    <div className="App">
      <h1>Calculadora IMC</h1>
      <form>
        <label>Altura (cm):</label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)}
        />
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)}
        />
        <button type="button" onClick={calculaIMC}>Calcular</button>
      </form>

      {imc && (
        <div>
          <h2>Seu IMC é: {imc}</h2>
          <p>Classificação: {ClassificacaoIMC(parseFloat(imc))}</p>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Menor que 18.5</td>
            <td>Abaixo do peso</td>
          </tr>
          <tr>
            <td>18.5 - 24.9</td>
            <td>Saudável</td>
          </tr>
          <tr>
            <td>25.0 - 29.9</td>
            <td>Peso em excesso</td>
          </tr>
          <tr>
            <td>30.0 - 34.9</td>
            <td>Obesidade grau 1</td>
          </tr>
          <tr>
            <td>35.0 - 39.9</td>
            <td>Obesidade grau 2 (severa)</td>
          </tr>
          <tr>
            <td>Maior ou igual a 40.0</td>
            <td>Obesidade grau 3 (mórbida)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
