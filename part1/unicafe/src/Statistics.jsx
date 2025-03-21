const Statistics = ({scores}) => {


    if(scores.totalCount > 0){
        return (
            <div>
                <p>good {scores.good}</p>
                <p>neutral {scores.neutral}</p>
                <p>bad {scores.bad}</p>
                <p>all {scores.totalCount}</p>
                <p>average {scores.average}</p>
                <p>positive {scores.positive}</p>
            </div>
        )
    } else {
        return (
            <p>No feedback given</p>
        )
    }
    

}

export default Statistics