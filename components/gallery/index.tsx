"use client"
import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Image as ImageType } from '@/types'
import GalleryTab from './gallerytab'
import Image from 'next/image'

interface GalleryProps {
  images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      {/* Thumbnail list */}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>

      {/* TabPanels container with explicit height and background for debugging */}
      <TabPanels className="aspect-square w-full h-96 bg-gray-200 border border-blue-500">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden border border-red-500">
              <Image
                fill
                src={image.url}
                alt="Gallery Image"
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

export default Gallery;
