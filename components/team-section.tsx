import { Card } from "@/components/ui/card"

const teamMembers = [
  {
    name: "John Smith",
    designation: "Designation here",
    image: "/placeholder.svg?height=80&width=80",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  },
  {
    name: "Elina Williams",
    designation: "Designation here",
    image: "/placeholder.svg?height=80&width=80",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  },
  {
    name: "John Smith",
    designation: "Designation here",
    image: "/placeholder.svg?height=80&width=80",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
  }
]

export function TeamSection() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Team</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      
      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-blue-50 rounded-lg p-4">
            <div className="flex gap-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.designation}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{member.description}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

