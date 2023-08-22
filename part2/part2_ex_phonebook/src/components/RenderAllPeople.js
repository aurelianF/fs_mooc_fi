export default function RenderAllPeople({filterVar, filteredList, persons}) {
    console.log("RenderAllPeople called");
    return (
        <>
        {(filterVar!=="") ? filteredList.map(pers => <p key={pers.name}>{pers.name} {pers.number}</p>) :
        persons.map(pers => <p key={pers.name}>{pers.name} {pers.number}</p>)}
        </>
    );
}