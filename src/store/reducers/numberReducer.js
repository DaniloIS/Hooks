export function numberReducer(state, action) {
    switch(action.type) {

        case 'numberAdd2':
            return {...state, number: state.number + 2};
        break;

        case 'numberMult7':
            return {...state, number: state.number * 7};
        break;

        case 'numberDiv25':
            return {...state, number: state.number / 25};
        break;

        case 'numberParseInt':
            return {...state, number: parseInt(state.number)};
        break;

        case 'numberAddN':
            return {...state, number: action.payload };
        break;

        default:
            return state;
    }
}