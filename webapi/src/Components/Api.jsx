import { useState, useEffect } from "react";
import { getList } from "../Services/list";
function Api() {
  const [list, setList] = useState([]);
  const info = () => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  };
  useEffect(info, []);
  return <>
  <h1>My Grocery List</h1>
     <ol>
       {list.map(item => <li key={item.item}>{item.item}</li>)}
     </ol>
  </>;
}

export default Api;
