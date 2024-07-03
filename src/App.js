import './App.css';
import React from 'react'


function NumInput(props){
  return(
    <input className="input_style" type="number" defaultValue={props.value}></input>
  );
}

function FakeInput(props){
  return(
    <>
    {props.active==1
      ?<div className="input_style input_padding">{props.value}</div>
      :<div className="input_style input_padding input_inactive">{props.value}</div>
    }
    </>
  )
}

function InputQuarter(props){
  return(
    <div className="half_wrapper center">
      <div>Значения</div>
      {props.value_array.map(
        (val)=>
          <NumInput value={val}/>
        )}
    </div>
  )
}

function UnitQuarter(props){
  return(
    <div className="half_wrapper center">
      <div>Ед. изм.</div>
      {props.value_array.map(
        (val)=>
          <FakeInput value={val} active={props.active}/>
        )}
    </div>
  )
}

function InputHalf(props){
  return(
    <div className="half_wrapper second_half">
      <UnitQuarter value_array={props.unit_array} active={1}/>
      <InputQuarter value_array={props.input_array}/>
    </div>
  )
}

function ParameterHalf(props){
  return(
    <div className="half_wrapper">
    <div className="left_line left_line_padding">Показатели</div>
    {props.parameter_array.map(
      val=>
        <div className="left_line left_line_margin">{val}</div>
    )}
    </div>
  )
}

function InputBlock(props){
  return(
    <div className="block_wrapper">
      <div className="table_text">{props.table_text}</div>
      <div className="block_inner_wrapper">
        <ParameterHalf parameter_array={props.parameter_array}/>
        <InputHalf
          unit_array={props.unit_array}
          input_array={props.input_array}
        />
      </div>
    </div>
  )
}

function Button(props){
  return(
    <div className="calculate_button center" id="calc_button">{props.value}</div>
  )
}

function OutputHalf(props){
  return(
    <div className="half_wrapper second_half">
      <UnitQuarter value_array={props.unit_array} active={0}/>
      <UnitQuarter value_array={props.input_array} active={0}/>
    </div>
  )
}

function OutputBlock(props){
  return(
    <div className="block_wrapper">
      <div className="table_text">{props.table_text}</div>
      <div className="block_inner_wrapper">
        <ParameterHalf parameter_array={props.parameter_array}/>
        <OutputHalf
          unit_array={props.unit_array}
          input_array={props.input_array}
        />
      </div>
    </div>
  )
}



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
            input_array={[0,0,0,0]}
          />
          <InputBlock
            table_text="Оперативные данные"
            parameter_array={["Кто","Кэф","Тос_тр"]}
            unit_array={["Вт /(м²*К)","-","C"]}
            input_array={[0,0,0]}
          />
          <InputBlock
            table_text="Параметры потока"
            parameter_array={["Pвх","Твх","Q"]}
            unit_array={["МПа","С","млн м³/сут"]}
            input_array={[0,0,0]}
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
            input_array={['','']}
          />
          <Button value="Рассчитать"/>
        </div>
      </div>
    </div>
  );
}

export default App;
