const CsrReducer = (state = "true", action) => {
  console.log("CsrReducer");
  console.log(state);

  return state;
}

export default CsrReducer;