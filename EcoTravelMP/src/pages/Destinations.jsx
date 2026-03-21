import { useState } from 'react'

const destinationsList = [
  { id: 1, name: "Amazon Rainforest", location: "Brazil", price: "₹89,999", desc: "8-day expedition with indigenous tribes. Zero plastic policy.", img: "https://picsum.photos/id/1015/600/400" },
  { id: 2, name: "Iceland Glaciers", location: "Iceland", price: "₹1,29,999", desc: "Ice cave hiking + Northern Lights. 100% renewable energy.", img: "https://picsum.photos/id/1016/600/400" },
  { id: 3, name: "Himalayan Trek", location: "India", price: "₹49,999", desc: "7-day eco-trek to Annapurna base camp with local porters.", img: "https://picsum.photos/id/133/600/400" },
]

function Destinations() {
  const [selected, setSelected] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const openModal = (dest) => {
    setSelected(dest)
    setShowModal(true)
  }

  const bookNow = () => {
    alert(`🎉 Booking confirmed for ${selected.name}! You'll receive details on WhatsApp shortly.`)
    setShowModal(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-6xl font-bold text-center mb-6">Our Destinations</h1>
      <p className="text-center text-green-400 text-xl mb-16">Click any card to explore & book</p>

      <div className="grid md:grid-cols-3 gap-10">
        {destinationsList.map(dest => (
          <div
            key={dest.id}
            onClick={() => openModal(dest)}
            className="group bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <img src={dest.img} alt={dest.name} className="w-full h-64 object-cover" />
            <div className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-semibold">{dest.name}</h3>
                  <p className="text-green-400">{dest.location}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{dest.price}</div>
                  <div className="text-xs text-zinc-500">per person</div>
                </div>
              </div>
              <p className="mt-6 text-zinc-400 line-clamp-3">{dest.desc}</p>
              <button className="mt-8 w-full bg-green-600 py-4 rounded-2xl font-semibold hover:bg-green-500 transition">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {showModal && selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
          <div className="bg-zinc-900 rounded-3xl max-w-lg w-full overflow-hidden">
            <img src={selected.img} alt="" className="w-full h-64 object-cover" />
            
            <div className="p-8">
              <h2 className="text-4xl font-bold mb-2">{selected.name}</h2>
              <p className="text-green-400 text-xl mb-8">{selected.location} • {selected.price}</p>
              <p className="text-zinc-300 leading-relaxed">{selected.desc}</p>

              <div className="flex gap-4 mt-12">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-5 border border-zinc-700 rounded-2xl hover:bg-zinc-800"
                >
                  Close
                </button>
                <button
                  onClick={bookNow}
                  className="flex-1 py-5 bg-green-600 rounded-2xl font-bold hover:bg-green-500 active:scale-95 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Destinations