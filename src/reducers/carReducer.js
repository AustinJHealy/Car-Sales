import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/carActions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-8 engine", price: 3500 },
    { id: 2, name: "Racing package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 800 },
    { id: 4, name: "Rear spoiler", price: 450 },
    { id: 5, name: "Leather Interior", price: 1000 },
    { id: 6, name: "Racing Tires", price: 5430 },
    { id: 7, name: "Rocket Boosters", price: 3294823 },
    { id: 8, name: "Parachute", price: 2320 },
    { id: 9, name: "Spinning 24K Gold Rims", price: 7593937 },
  ],
};
export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
        additionalFeatures: state.additionalFeatures.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            (item) => item.id !== action.payload.id
          ),
        },
        additionalFeatures: [...state.additionalFeatures, action.payload],
      };
    default:
      return state;
  }
};
