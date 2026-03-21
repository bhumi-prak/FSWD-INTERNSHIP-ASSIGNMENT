function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-6xl font-bold text-center mb-16">Our Story</h1>
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img src="https://picsum.photos/id/1016/800/600" alt="Team" className="rounded-3xl shadow-2xl" />
        </div>
        <div className="space-y-8 text-lg">
          <p className="text-2xl">Founded in 2023, EcoTravel is on a mission to make travel regenerative — not destructive.</p>
          <p>We partner only with local guides, plant 10 trees per booking, and offset every flight.</p>
          
          <div className="flex gap-8 pt-8 border-t border-green-900">
            <div>
              <div className="text-5xl font-bold text-green-400">10k+</div>
              <div className="text-sm mt-2">Trees Planted</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-400">47</div>
              <div className="text-sm mt-2">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About