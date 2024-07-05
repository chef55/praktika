import './App.css';
import React from 'react'
import InputBlock from './components/InputBlock';
import OutputBlock from './components/OutputBlock';
import Button from './components/Button';

function App() {
  return (
    <div className="main_wrapper">
      <div className="in_out_outer_wrapper">
        <div className="title_text">Исходные данные</div>
        <div className="in_out_inner_wrapper">
          <InputBlock
            table_text="Паспортные данные"
            parameter_array={["L","Dвн","dст","Кэкв/шер"]}
            unit_array={["км","мм","мм","мм"]}
            input_ids={["L","Dvn","dst","Kekv"]}
          />
          <InputBlock
            table_text="Оперативные данные"
            parameter_array={["Кто","Кэф","Тос_тр"]}
            unit_array={["Вт /(м²*К)","-","C"]}
            input_ids={["Kto","Kef","Tos"]}
          />
          <InputBlock
            table_text="Параметры потока"
            parameter_array={["Pвх","Твх","Q"]}
            unit_array={["МПа","С","млн м³/сут"]}
            input_ids={["Pvh","Tvh","Q"]}
          />
        </div>
      </div>
      <div className="in_out_outer_wrapper">
        <div className="title_text">Исходные данные</div>
        <div className="in_out_inner_wrapper">
          <OutputBlock
            table_text="Расчетные параметры потока"
            parameter_array={["Pвых","Твых"]}
            unit_array={["МПа","C"]}
            id_array={['P','T']}
          />
          <Button value="Рассчитать"/>
        </div>
      </div>
    </div>
  );
}

export default App;
