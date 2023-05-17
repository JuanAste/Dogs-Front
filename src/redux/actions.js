export const ALL_DOGS = "ALL_DOGS";
export const SEARCH_DOGS = "SEARCH_DOGS";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const RESET_NUM_PAGE = "RESET_NUM_PAGE";
export const RESET_PAGE = "RESET_PAGE";
export const ALL_TEMPS = "ALL_TEMPS";
export const FILTER_TEMPS = "FILTER_TEMPS";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const ORDER_RACE = "ORDER_RACE";
export const ORDER_WEIGHT = "ORDER_WEIGHT";



export function resetPage() {
  return {
    type: RESET_PAGE,
  };
}

export function prevPage() {
  return {
    type: PREV_PAGE,
  };
}

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}

export function resetNumPage() {
  return {
    type: RESET_NUM_PAGE,
  };
}

export function allDogs(dogs) {
  return {
    type: ALL_DOGS,
    payload: dogs,
  };
}

export function searchDogs(dogs) {
  return {
    type: SEARCH_DOGS,
    payload: dogs,
  };
}

export function allTemperaments(temp) {
  return {
    type: ALL_TEMPS,
    payload: temp,
  };
}

export function tempsFilter(temp) {
  return {
    type: FILTER_TEMPS,
    payload: temp,
  };
}

export function originFilter(caso) {
  return {
    type: FILTER_ORIGIN,
    payload: caso,
  };
}

export function raceOrder(caso) {
  return {
    type: ORDER_RACE,
    payload: caso,
  };
}

export function weightOrder(caso) {
  return {
    type: ORDER_WEIGHT,
    payload: caso,
  };
}
