const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jubotron" >
            <h1 >{counter}</h1>
            <button onClick={dec} className="btn btn-primary" id="dec">DEC</button>
            <button onClick={inc} className="btn btn-primary" id="inc">INC</button>
            <button onClick={rnd} className="btn btn-primary" id="rnd">RND</button>

        </div>
    )
}

export default Counter;