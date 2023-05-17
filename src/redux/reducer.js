import {
  ALL_DOGS,
  SEARCH_DOGS,
  NEXT_PAGE,
  PREV_PAGE,
  RESET_PAGE,
  RESET_NUM_PAGE,
  ALL_TEMPS,
  FILTER_TEMPS,
  FILTER_ORIGIN,
  ORDER_RACE,
  ORDER_WEIGHT,
} from "./actions";

const inicialState = {
  dogs: [],
  originDogs: [],
  numPage: 1,
  temperaments: [],
};

export default function rootReducer(state = inicialState, { type, payload }) {
  switch (type) {
    case ALL_DOGS:
      return {
        ...state,
        originDogs: payload,
        dogs: payload,
      };
    case SEARCH_DOGS:
      return {
        ...state,
        dogs: payload,
        numPage: 1
      };
    case NEXT_PAGE:
      return {
        ...state,
        numPage: state.numPage + 1,
      };
    case PREV_PAGE:
      return {
        ...state,
        numPage: state.numPage - 1,
      };
    case RESET_NUM_PAGE:
      return {
        ...state,
        numPage: 1,
      };
    case RESET_PAGE:
      return {
        ...state,
        dogs: state.originDogs,
        numPage: 1,
      };
    case ALL_TEMPS:
      let temp = payload.sort((a, b) =>{
        if(a.name.toLowerCase() < b.name.toLowerCase()){
          return -1
        }else{
          return 1
        }
      })
      return {
        ...state,
        temperaments: temp,
      };
    case FILTER_TEMPS:
      let tempFilt = state.dogs.filter((dog) => {
        if (dog.temperaments && payload !== "Reset") {
          return dog.temperaments.includes(payload);
        }else{
          return false;
        }
      });
      if (payload === "Reset") tempFilt = state.originDogs;
      return {
        ...state,
        dogs: tempFilt,
        numPage: 1,
      };
    case FILTER_ORIGIN:
      let orgFilt = state.originDogs.filter((dog) => {
        if (payload === "A" && payload !== "Reset") {
          return dog.id <= 264;
        } else if (payload === "B" && payload !== "Reset") {
          return dog.id > 264;
        }else{
          return false;
        }
      });
      if (payload === "Reset") orgFilt = state.originDogs;
      return {
        ...state,
        dogs: orgFilt,
        numPage: 1,
      };
    case ORDER_RACE:
      let orderRace = [...state.dogs].sort((a, b) => {
        if (payload === "A") {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          } else {
            return -1;
          }
        } else if (payload === "D") {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1;
          } else {
            return -1;
          }
        }else{
          return false;
        }
      });
      return {
        ...state,
        dogs: orderRace,
      };
    case ORDER_WEIGHT:
      let orderWeight = [...state.dogs].sort((a, b) => {
          const aRange = a.weight.split(" - ").map((num) => parseInt(num));
          const bRange = b.weight.split(" - ").map((num) => parseInt(num));
          const Dog1 = (aRange[0] + aRange[1]) / 2;
          const Dog2 = (bRange[0] + bRange[1]) / 2;
          if (!Dog1 && !Dog2) {
            return -1;
          }
          if(Dog1 && !Dog2){
            return -1;
          }
          if(!Dog1 && Dog2){
            return 1;
          }
          if (payload === "A" && Dog1 > Dog2) {
            return 1;
          } else if (payload === "A" && Dog1 < Dog2) {
            return -1;
          } else if (payload === "D" && Dog1 < Dog2) {
            return 1;
          } else if (payload === "D" && Dog1 > Dog2) {
            return -1;
          }else{
            return false;
          }
      });
      return {
        ...state,
        dogs: orderWeight,
      };

    default:
      return { ...state };
  }
}
