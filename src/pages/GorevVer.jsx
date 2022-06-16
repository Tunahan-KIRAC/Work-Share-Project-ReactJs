import React, { useEffect, useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { getCategories } from '../api/categoriesApi'
import { addWork } from '../api/workApi'

export const GorevVer = () => {

    const [inputtitle, setTitle] = useState('')
    const [inputdescription, setDescription] = useState('')
    const [inputcate, setCate] = useState()    
    const [inputprice, setPrice] = useState('')
    const [allCategories, setAllCategories] = useState([])
    
  const handleSubmit = async (e) => {
    e.preventDefault()
    //console.log(title,description,cate,price)
    
    try {
      
      const data = {
        title: inputtitle,
        description: inputdescription,
        price: parseInt( inputprice),
        categoryId: parseInt(inputcate),
        modifiedUserName:localStorage.getItem('user-name'),
        ownerId:localStorage.getItem('user-id'),
        isActive:true
    }
   await addWork(data).then((res) => {
    console.log(res.data)
      })
     } catch (err) {
       console.log(err)
     }
  }

  useEffect(() => {
    try{
      getCategories().then((res) => {
        
        setAllCategories(res.data)

      })

    }catch(err){
      console.log(err)
    }
  }, [])


  return (
   
      
      <div style={{ display: 'flex', justifyContent: "center" }}>
      <h1>Görev Ver</h1>
      <Form style={{ width: 400 }} onSubmit={handleSubmit}>
        <Form.Control value={inputtitle} onChange={(e) => setTitle(e.target.value)} className='w-100 mt-3' placeholder='Başlık' type='text'/>
        <Form.Control value={inputdescription} onChange={(e) => setDescription(e.target.value)} className='w-100 mt-3' placeholder='Açıklama' type='text'/>
        <Form.Select  onChange={(e) => setCate(e.target.value)} className='w-100 mt-3'>
          {allCategories.map((item) => (
            <option key={item.id} value={item.id}>{item.title}</option>
          ))}
        </Form.Select>
        <Form.Control value={inputprice} onChange={(e) => setPrice(e.target.value)} className='w-100 mt-3' placeholder='Ücret' type='text'/>
        
        <div style={{ display: 'flex', justifyContent: "center"}}>
      <Button type='submit' className='mt-3' variant='primary'>Login</Button>
      </div>
      </Form>
    </div>

  )
}
