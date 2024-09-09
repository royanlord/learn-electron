import { useEffect, useState } from 'react'
import './App.css'

interface Rating {
  rate: number
  count: number
}

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating[]
}

function App() {
  const [products, setProducts] = useState<Product[]>([])

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data: Product[] = await response.json()
      // console.log(data);
      setProducts(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <>
      <div className='w-10/12 bg-white border-2 border-solid border-red-500 mx-auto px-5 py-8 my-12'>
        <h1 className='text-center text-4xl'>LIST PRODUCT</h1>
        <div className='grid grid-cols-3 gap-4 mt-8'>
          {products.map((product) => {
            console.log(product);
            return (
              <div key={product.id} className="flex flex-col bg-gray-300 p-4 h-full rounded-lg">
                <div className='bg-white p-5 rounded-md'>
                  <img src={product.image} alt={product.title} className="w-full h-56 object-contain" />
                </div>
                <h2 className="text-xl mt-2">{product.title}</h2>
                <p className="text-sm mt-2 flex-grow">
                  {product.description.length > 100 
                    ? `${product.description.substring(0, 100)}...` 
                    : product.description}
                </p>
                <p className="text-xl mt-2">${product.price}</p>
              </div>
            )
          })}
          {/* <div>hai</div>
          <div>hai</div> */}
        </div>
      </div>
    </>
  )
}

export default App
