import { FactoryTag } from "./factoryTag.js";
import { FactoryBox } from "./factoryBox.js";
import { Validations } from "./factoryValidation.js";

export function FactoryFrame() {
  const API = {};
  const factoryTag = new FactoryTag();
  const factoryBox = new FactoryBox();
  let params = {};

  API.input = function (myParams) {
    const myId = myParams.id;
    myParams.id = "div_" + myParams.id;
    myParams.validate = myParams.validate || Validations.accepted;


    
    return factoryTag.input(myParams);
    /*
    var x = params.id;
    params.id = "div_" + params.id;
    params.class = "contenedorFila";
    params.text = "";
    var div = factoryTag.div(params);
    params.id = x;

    var miLabel = {
      id: "label_" + params.id,
      class: "labelInput",
      for: params.id,
      title: STORE.generalPurposeFunctions.capital(params.id) + ": ",
    };
    var label = factoryTag.label(miLabel);

    var miInput = {
      id: params.id,
      validate: params.validate || "STORE.validate.accepted",
      class: "etiqueta19 s8",
      type: params.type,
      size: params.size,
      minLength: params.minLength,
      maxLength: params.maxLength,
      required: params.required,
      placeholder: params.placeholder,
      title: params.title,
    };
    var input = factoryTag.input(miInput);

    var miLabelError = {
      id: "labelError_" + params.id,
      class: "labelInput",
      for: params.id,
      title: "Aviso: ",
    };
    var labelError = factoryTag.label(miLabelError);

    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(labelError);
    return div;*/
  };
  return API;
}
