export default function Features() {
  const features = [
    '✅ Time-locked Release Engine',
    '✅ Multimedia Capsule Support',
    '✅ Supabase Authentication & Storage',
    '✅ Legacy Handler Interface (Upcoming)',
    '✅ Posthumous Delivery Mode',
    '✅ Encrypted Cloud Storage',
  ];

  return (
    <section className="mt-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Key Features</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300">
        {features.map((feature, index) => (
          <li
            key={index}
            className="bg-gray-800 p-5 rounded-xl shadow-md hover:bg-gray-700 transition"
          >
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}
