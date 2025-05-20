export default function CategorySkeleton() {
  return Array.from({ length: 4 }).map((_, index) => (
    <div
      key={index}
      className="rounded-lg overflow-hidden shadow-md bg-white animate-pulse"
    >
      <div className="aspect-video bg-[#e7ddd0]" />
      <div className="p-3 text-center">
        <div className="h-4 w-3/4 mx-auto bg-[#e7ddd0] rounded" />
      </div>
    </div>
  ));
}