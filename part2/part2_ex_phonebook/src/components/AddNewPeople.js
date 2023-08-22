const AddNewPeople = (props) => {
    return (
        <form onSubmit={props.addName}>
            <div>
                name: <input value={props.newName} onChange={props.handleFieldChange} />
            </div>
            <div>
                number: <input value={props.newNumber} onChange={props.handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default AddNewPeople;