export default function checkInput(name,value){
    //console.log("val:",value)
    if(isNaN(value)){
        return "Поле должно быть заполнено"
    }
    switch(name){
        case "L":{
            if(value<=0){
                return "Длина не может быть неположительной"
            }
            break
        }
        case "d":{
            if(value<=0){
                return "Диаметр не может быть неположительной"
            }
            break
        }
        case "dst":{
            if(value<=0){
                return "Толщина не может быть неположительной"
            }
            break
        }
        case "K":{
            if(value<=0){
                return "Эквивалентная шероховатость труб не может быть неположительной"
            }
            break
        }
        /*case "Ksr":{
            break
        }
        case "E":{
            break
        }*/
        case "To":{
            if(value<-273.15){
                return "Температура не может быть меньше абсолютного нуля"
            }
            break
        }
        case "Pn":{
            if(value<=0){
                return "Начальное давление не может быть неположительным"
            }
            break
        }
        case "Tn":{
            if(value<-273.15){
                return "Температура не может быть меньше абсолютного нуля"
            }
            break
        }
        case "q":{
            if(value<=0){
                return "Пропускная способность не может быть неположительной"
            }
            break
        }
    }
    return "good"
}