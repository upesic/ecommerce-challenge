import { ItemImageContainerProps } from '@/types'
import Image from 'next/image'

export default function ItemImageContainer({ image, title, imageClassName = '', containerClassname = '', priority = false }: ItemImageContainerProps) {
  return (
    <div className={`relative ${containerClassname}`}>
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className={`object-contain ${imageClassName}`}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-text-secondary">
          No Image
        </div>
      )}
    </div>
  )
}