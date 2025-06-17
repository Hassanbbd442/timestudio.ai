export default function UseCases() {
  const useCases = [
    {
      title: 'Digital Wills',
      description: 'Leave final words and directions that arrive when most needed.',
    },
    {
      title: 'Posthumous Messages',
      description: 'Deliver love, lessons, and legacy long after you’re gone.',
    },
    {
      title: 'Long-Term Knowledge',
      description: 'Preserve ideas, research, or teachings for future generations.',
    },
    {
      title: 'Timed Campaigns',
      description: 'Launch political, creative, or social releases at the perfect moment.',
    },
  ];

  return (
    <section className="mt-20 max-w-5xl mx-auto text-center px-6">
      <h2 className="text-3xl font-semibold mb-4">Built For Timeless Use</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition"
          >
            <h3 className="font-semibold text-xl">{useCase.title}</h3>
            <p className="text-gray-400 mt-2">{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
