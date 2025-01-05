import Container from "./Container";
import Filter from "./Filter";

function List() {
  return (
    <>
      <div className="flex w-full h-full p-4 space-x-4">
        <Filter />
        <Container />
      </div>
    </>
  );
}

export default List;