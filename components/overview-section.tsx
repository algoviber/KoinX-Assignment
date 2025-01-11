export function OverviewSection() {
  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Performance</h2>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-sm text-gray-500">Today's Low</div>
          <div className="font-medium">46,930.22</div>
        </div>
        <div className="flex-1 mx-4 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded" />
        <div>
          <div className="text-sm text-gray-500">Today's High</div>
          <div className="font-medium">49,343.83</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">52W Low</div>
          <div className="font-medium">16,930.22</div>
        </div>
        <div className="flex-1 mx-4 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded" />
        <div>
          <div className="text-sm text-gray-500">52W High</div>
          <div className="font-medium">49,743.83</div>
        </div>
      </div>
    </div>
  )
}

