import '../style.css';
import React from 'react'
import InputBlock from './InputBlock';
import OutputBlock from './OutputBlock';
import Button from './Button';

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
            input_ids={["L","d","dst","K"]}
            input_values={[100,1403.5,16.5,0.03]}
          />
          <InputBlock
            table_text="Оперативные данные"
            parameter_array={["Кто","Кэф","Тос_тр"]}
            unit_array={["Вт /(м²*К)","-","C"]}
            input_ids={["Ksr","E","To"]}
            input_values={[0.2,0.95,15,10]}
          />
          <InputBlock
            table_text="Параметры потока"
            parameter_array={["Pвх","Твх","Q"]}
            unit_array={["МПа","С","млн м³/сут"]}
            input_ids={["Pn","Tn","q"]}
            input_values={[10,40,100]}
          />
        </div>
      </div>
      <div className="in_out_outer_wrapper">
        <div className="title_text">Результаты рассчета</div>
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
