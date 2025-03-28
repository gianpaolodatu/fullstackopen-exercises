import StatisticLine from './StatisticLine'

const Statistics = ({scores}) => {
    if(scores.totalCount > 0){
        return (
            <table>
                <StatisticLine text="good" value={scores.good}/>
                <StatisticLine text="neutral" value={scores.neutral}/>
                <StatisticLine text="bad" value={scores.bad}/>
                <StatisticLine text="totalCount" value={scores.totalCount}/>
                <StatisticLine text="average" value={scores.average}/>
                <StatisticLine text="positive" value={scores.positive}/>
            </table>
        )
    } else {
        return (
            <p>No feedback given</p>
        )
    }
}

export default Statistics