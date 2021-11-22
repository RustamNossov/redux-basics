import { connect } from "react-redux";
import * as actions from '../actions';
import { bindActionCreators } from "redux";


const Counter = ({counter, inc, dec, rnd}) => {
    console.log(counter)
    return (
        <div className="jumbotron" >
            <h1 >{counter}</h1>
            <button onClick={dec} className="btn btn-primary" id="dec">DEC</button>
            <button onClick={inc} className="btn btn-primary" id="inc">INC</button>
            <button onClick={rnd} className="btn btn-primary" id="rnd">RND</button>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

// const mapDisptchToProps = (dispatch) => {

//     return bindActionCreators(actions, dispatch)
//     // const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
//     // return {
//     //     inc,
//     //     dec,
//     //     rnd,
//     // }
// }
export default connect(mapStateToProps, actions)(Counter);