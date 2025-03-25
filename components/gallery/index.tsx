"use client"
import React from 'react'
import { Tab, TabGroup, TabList } from '@headlessui/react'
import { Image as ImageType } from '@/types'
import GalleryTab from './gallerytab'

interface GalleryProps {
  images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {  // default to an empty array
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} images={image} />
          ))}
        </TabList>
      </div>
    </TabGroup>
  )
}

export default Gallery;
