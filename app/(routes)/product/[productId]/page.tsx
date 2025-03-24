import getProducts from '@/actions/get-Products'
import getProduct from '@/actions/get-product'
import Container from '@/components/ui/container'
import React from 'react'
import { notFound } from 'next/navigation'
import ProductList from '@/components/product-list'

interface ProductsProps {
  params: {
    productId: string
  }
}

const ProductPage: React.FC<ProductsProps> = async ({ params }) => {
  const product = await getProduct(params.productId);

  // If product is not found, display the 404 page
  if (!product) {
    return notFound();
  }

  const suggestedProduct = await getProducts({
    categoryId: product?.category?.id
  });

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-10 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
            <div>Gallery</div>
            <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
              {/* {info} */}
              Info
            </div>
          </div>
          <hr className='my-10'/>
          <ProductList title='Related Product' items={suggestedProduct}/>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
