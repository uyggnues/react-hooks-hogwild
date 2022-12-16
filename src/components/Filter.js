function Filter ({queryHog, setQueryHog}) {

    const handleSelect = (e) => {
        setQueryHog(e.target.value)
    }

    return (
        <div>
            <select type="select" onChange={handleSelect} value={queryHog}>
                <option value="All">All</option>
                <option value={true}>Greased</option>
                <option value={false}>Not Greased</option>
            </select>

        </div>
    )
}

export default Filter