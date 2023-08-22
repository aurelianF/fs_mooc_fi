export default function SearchFilter({handleFilterInputChange}) {
    return (
      <div>
      filter shown with:<input type="text" onChange={handleFilterInputChange}></input>
    </div>
    )
}