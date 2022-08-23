import Data from "./data/productsData";
import Item from "./Item";

export default function Items() {
  var rows = [];
  if (Data.length === 0 || Data === undefined) {
    rows.push(<h2 className="noItems">No items in store</h2>);
  } else {
    for (let index = 0; index < Data.length; index++) {
      rows.push(
        <Item
          key={Data[index].id}
          id={Data[index].id}
          title={Data[index].fields.title}
          miniDescription={Data[index].fields.miniDescription}
          image={Data[index].fields.imageURL}
          price={Data[index].fields.price}
          viewInDetail={(key) => console.log("View In Detail called on " + key)}
        />
      );
    }
  }
  return rows;
}
