export default function Main() {
  return (
    <>
      <div className="ui ">
        <div className="container">
          <p>
            <span className="ui text massive center">Beast Wars</span>
          </p>
          <hr />
          <h2 className="text center ui">Sorting options</h2>
          <button className="button ui red large redBtn" onclick="sortByName()">
            Sort by Alphabetical
          </button>
          <button
            className="button ui blue large blueBtn"
            onclick="sortMaximals()"
          >
            Maximals Only
          </button>
          <button
            className="button ui yellow large yellowBtn"
            onclick="sortPredacons()"
          >
            Predacons Only
          </button>
          <button
            className="button ui green large greenBtn"
            onclick="sortByAnimal()"
          >
            Sort by Animal
          </button>
          <button
            className="button ui black large blackBtn"
            onclick="sortRandom()"
          >
            Sort Randomly
          </button>
          <i className="map signs icon huge float right"></i>
        </div>
      </div>
      <div className="ui link cards four stackable" id="here">
        {/*Print cards here */}
      </div>
    </>
  );
}
