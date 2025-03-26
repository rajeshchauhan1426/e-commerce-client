import React from 'react'
import { Image as ImageType } from '@/types'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { cn } from '@/libs/libs'

interface GalleryTabProps {
  image: ImageType
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative aspect-square cursor-pointer rounded-md bg-white overflow-hidden">
      {({ selected }) => (
        <>
          <Image
            fill
            src={image.url}
            alt=""
            className="object-cover object-center"
          />
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </>
      )}
    </Tab>
  )
}

export default GalleryTab
