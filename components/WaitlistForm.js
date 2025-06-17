import { useState } from 'react';
// import { supabase } from '../lib/supabaseClient';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus('Submitting...');

  //   const { error } = await supabase
  //     .from('waitlist')
  //     .insert([{ email }]);

  //   if (error) {
  //     setStatus('Something went wrong. Try again.');
  //     console.error(error);
  //   } else {
  //     setStatus('Success! You’ve joined the waitlist.');
  //     setEmail('');
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('Submitting...');

  const res = await fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });

  const data = await res.json();

  if (!res.ok) {
    setStatus('Something went wrong. Try again.');
    console.error(data);
  } else {
    setStatus('Success! You’ve joined the waitlist.');
    setEmail('');
  }
};


  return (
    <section id="waitlist" className="mt-20 bg-gray-800 py-12 px-6 text-center rounded-xl max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Join the Waitlist</h2>
      <p className="text-gray-400 mb-6">Be among the first to access TimeStudio.ai.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-md w-full sm:w-auto text-black"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-semibold"
        >
          Notify Me
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
    </section>
  );
}
