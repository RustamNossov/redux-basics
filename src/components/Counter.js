import { connect } from "react-redux";
import { dec, inc, rnd } from '../actions';
//import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";



const Counter = () => {

    const counter = useSelector(state =>  state.counter)
    const dispatch = useDispatch()
    console.log(counter)
    return (
        <div className="jumbotron" >
            <h1>{counter}</h1>
            <button onClick={()=>dispatch(dec())} className="btn btn-primary" id="dec">DEC</button>
            <button onClick={()=>dispatch(inc())} className="btn btn-primary" id="inc">INC</button>
            <button onClick={()=>dispatch(rnd())} className="btn btn-primary" id="rnd">RND</button>

        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         counter: state.value
//     }
// }

// const mapDisptchToProps = (dispatch) => {

//     return bindActionCreators(actions, dispatch)
//     // const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
//     // return {
//     //     inc,
//     //     dec,
//     //     rnd,
//     // }
// }
// export default connect(mapStateToProps, actions)(Counter);

export default Counter;