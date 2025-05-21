import Link from 'next/link';
import Image from 'next/image';
import { CategoryItemProps } from '@/types';

const imageMap: Record<string, string> = {
  electronics: '/images/electronics.jpg',
  jewelery: '/images/jewelery.jpg',
  "men's clothing": '/images/men-clothing.jpg',
  "women's clothing": '/images/women-clothing.jpg',
};

export default function CategoryItem({ name }: CategoryItemProps) {
  return (
    <Link href={`/category/${encodeURIComponent(name)}`}>
      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer bg-white">
        <div className="aspect-video relative w-full">
          <Image
            src={imageMap[name]}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-3 text-center font-semibold capitalize text-secondary">{name}</div>
      </div>
    </Link>
  )
}