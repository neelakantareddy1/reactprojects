import { useState, useEffect } from "react";
import { getList, additem } from "../Services/list";
function Api() {
  const [list, setList] = useState([]);
  const [itemInput, setItemInput] = useState('');
  const [alert, setAlert] = useState(false);

  // To hide alert message after few seconds 

    useEffect(() => {
      if (alert) {
        setTimeout(() => {
          setAlert(false);
        }, 5000);
      }
    }, [alert]);


  const info = () => {
    let mounted = true;
    if(list.length && !alert){
      return;
    }
    getList().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  };
  useEffect(info, [list, alert]);

  const handleChange = (event) => {
       setItemInput(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    additem(itemInput)
      .then(() => {
        setItemInput('');
        setAlert(true)
      })
  };
  return <>
  <h1>My Grocery List</h1>
     <ol>
       {list.map(item => <li key={item.item}>{item.item}</li>)}
     </ol>
     {alert && <h2>submit successful</h2>}

     <form onSubmit={handleSubmit}>
        <label>
            <h4>New Item</h4>
            <input type="text" onChange={handleChange} value={itemInput}/>
        </label>
        <button type="submit">Submit</button>
     </form>
  </>;
}

export default Api;
