import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../context/firebase';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function BookDetailPage() {
    const params=useParams();
    const[data, setData]=useState(null);
    const[url, setURL]=useState(null);
    const[qty, setQty]=useState(1);
    const firebase=useFirebase();

    console.log(params);

    useEffect(()=>{
        firebase.getBookById(params.bookId).then((value)=>setData(value.data()))
    },[])
    

    useEffect(()=>{
        if(data){
            const imageURL=data.imageURl;
            firebase.getImageURl(imageURL).then((url)=>setURL(url))
        }
 },[data])

    const placeOrder=async()=>{
        const result=await firebase.placeOrder(params.bookId, qty)
        console.log("Order Placed", result)
    }
 if(data==null) return <h1>Loading...</h1>;
   
    
  return (
    <div className='container mt-5'>
        <h1>{data.name}</h1>
        <img src={url} width="50%"style={{borderRadius:"10px"}}/>
        <h1>Details</h1>
        <h4>Price: Rs{data.price}</h4>
        <h4>ISBN Number:{data.isbn}</h4>
        <h1>Owner Details</h1>
        <h4>Name:{data.displayName}</h4>
        <h4>Email:{data.userEmail}</h4>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            onChange={(e) => setQty(e.target.value)}
            value={qty}
            type="number"
            placeholder="Enter Qty"
          />
        </Form.Group>
        <Button onClick={placeOrder}>Buy Now</Button>
    </div>
  )
}

export default BookDetailPage