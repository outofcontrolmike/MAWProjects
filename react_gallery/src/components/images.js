export default function Images() {
  let Images = [
    "https://images.unsplash.com/photo-1634549667619-bbbdb4b098a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25vd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c25vd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ];

  function handleAdd() {
    console.log("working");
    Images.push(
      "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    );
  }
  function ShowImage() {
    {
      return Images.map((image) => {
        return (
          <div>
            <img src={image} width="150" />
          </div>
        );
      });
    }
  }
  return (
    <section>
      <div className="flex justify-center">
        <ShowImage />
      </div>

      <div className="flex justify-between my-5">
        <input
          className="p-2 border border-gray-800 rounded shadow"
          type="text"
        ></input>
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>
          Add New
        </button>
      </div>
    </section>
  );
}
