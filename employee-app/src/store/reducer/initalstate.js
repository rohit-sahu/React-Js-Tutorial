var initalstate = window.SERVER_PRELOADED_STATE_ ? window.SERVER_PRELOADED_STATE_ : {}
initalstate = { ...initalstate, isCsr: "true" }
export default initalstate;