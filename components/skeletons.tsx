export function FishCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="relative h-48 bg-gray-200 animate-pulse">
        <div className="absolute top-4 right-4 h-6 w-16 bg-gray-300 rounded-full animate-pulse" />
      </div>
      <div className="p-6">
        <div className="space-y-3">
          <div className="h-6 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
          <div className="h-16 bg-gray-200 rounded animate-pulse" />
          <div className="flex items-center justify-between">
            <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
            <div className="flex items-center space-x-1">
              <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-8 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CareGuideSkeleton() {
  return (
    <div className="text-center p-6 bg-white rounded-lg border shadow-sm">
      <div className="mx-auto w-12 h-12 bg-gray-200 rounded-full animate-pulse mb-4" />
      <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto animate-pulse" />
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="h-16 bg-gray-200 rounded animate-pulse" />
            <div className="h-6 bg-gray-200 rounded animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-pulse" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <div className="h-12 bg-gray-200 rounded w-40 animate-pulse" />
              <div className="h-12 bg-gray-200 rounded w-32 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function StatsSkeleton() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-gray-300 to-gray-400">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded w-24 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
    </div>
  )
}

export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Header Skeleton */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      <HeroSkeleton />

      {/* Featured Species Skeleton */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <FishCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Care Guide Skeleton */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-80 mx-auto animate-pulse" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <CareGuideSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      <StatsSkeleton />
    </div>
  )
}
