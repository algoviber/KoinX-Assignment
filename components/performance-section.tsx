interface PerformanceSectionProps {
  coinId: string;
}

export function PerformanceSection({ coinId }: PerformanceSectionProps) {
  return (
    <div className="p-4 md:p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Performance</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>Today's Low</span>
            <span>Today's High</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">46,930.22</span>
            <div className="flex-1 h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            <span className="text-sm">49,343.83</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>52W Low</span>
            <span>52W High</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">16,930.22</span>
            <div className="flex-1 h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
            <span className="text-sm">49,743.83</span>
          </div>
        </div>
      </div>
    </div>
  )
}

