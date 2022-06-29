import React from 'react'

function SearchBar() {

  const deleteMemberFiltred = (member) => {
    const index = memberfiltred.indexOf(member);
    setMemberfiltred([
      ...memberfiltred.slice(0, index),
      ...memberfiltred.slice(index + 1),
    ]);
  };
  return (<form className="admin-search-bar">
  <div className="search-bar-cont">
    <input
      type="text"
      placeholder="Rechercher"
      onChange={(event) => setParamFilter(event.target.value)}
    />{" "}
  </div>
  <div className="member-list">
    {paramFilter !== ""
      ? memberList
          .filter(
            (member) =>
              member.firstname
                .toUpperCase()
                .includes(paramFilter.toUpperCase()) ||
              member.lastname
                .toUpperCase()
                .includes(paramFilter.toUpperCase())
          )
          .map((member) => (
            <button
              type="button"
              className="member-item"
              onClick={() =>
                memberfiltred.includes(member)
                  ? null
                  : setMemberfiltred([...memberfiltred, member])
              }
            >
              {" "}
              {`${member.firstname}  ${member.lastname}`}{" "}
            </button>
          ))
      : null}
  </div>
  <div className="member-filtred-list">
    {memberfiltred !== ""
      ? memberfiltred.map((member) => (
          <button
            type="button"
            className="member-filtred-item"
            onClick={() => {
              deleteMemberFiltred(member);
            }}
          >
            {" "}
            {`${member.firstname}  ${member.lastname}`}{" "}
          </button>
        ))
      : null}
  </div>
</form>
  )
}

export default SearchBar