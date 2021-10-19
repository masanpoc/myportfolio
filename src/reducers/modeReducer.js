const modeReducer = (state, action) => {
    // console.log(action.value, action.type);
    if(action.type=='DARK'){
        return {...state, mode: 'dark'}
    } 
    if(action.type=='LIGHT') {
        return {...state, mode:'light'}
    }
}

export default modeReducer