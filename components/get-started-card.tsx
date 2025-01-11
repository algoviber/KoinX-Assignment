import { Button } from "@/components/ui/button"
import Image from "next/image"

export function GetStartedCard() {
  return (
    <div className="p-6 text-center text-white bg-blue-600 rounded-lg">
      <h2 className="mb-4 text-2xl font-bold">Get Started with KoinX for FREE</h2>
      <p className="mb-6">
        With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax
        reports.
      </p>
      <Image
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/placeholder.svg?height=200&width=200`}
        alt="KoinX Features"
        width={200}
        height={200}
        className="mx-auto mb-6"
      />
      <Button variant="secondary" size="lg" className="w-full font-semibold">
        Get Started for FREE →
      </Button>
    </div>
  )
}

