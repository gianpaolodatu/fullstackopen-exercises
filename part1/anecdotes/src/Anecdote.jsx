const Anecdote = ({title, text, vote}) => {

    return (
        <>
            <h2>{title}</h2>
            <p>
                {text}
            </p>
            <p>
                has {vote} votes
            </p>
        </>
    )

}

export default Anecdote