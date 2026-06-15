import React from 'react'
import { getAllProducts } from '@/lib/data'
import ProductCard from '@/components/ProductCard'
const ProudctsPage = async () => {
    const products = await getAllProducts()
  return (
    <div>
        <h1 className='text-3xl font-bold text-slate-900 mb-1'>All Products</h1>
        <p className='text-slate-500 mb-6'>Browse {products.length} developer tools and resources</p>
        <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-6'>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}

        </div>
    </div>
  )
}

export default ProudctsPage
