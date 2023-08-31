// export default function RenderAllPeople({filterVar, filteredList, persons}) {
export default function RenderAllPeople({ pers, deletePerson }) {
    // console.log("RenderAllPeople called");
    return (
        <>
            <p>
            {pers.name} {pers.number} <button onClick={deletePerson}> delete </button>

            </p>
            {/* { filteredList.map(pers => <p key={pers.name}>{pers.name} {pers.number}</p>) } */}
        </>
        // <>
        // {(filterVar!=="") ? filteredList.map(pers => <p key={pers.name}>{pers.name} {pers.number}</p>) :
        // persons.map(pers => <p key={pers.name}>{pers.name} {pers.number}</p>)}
        // </>
    );
}