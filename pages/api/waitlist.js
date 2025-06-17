// import { supabase } from '../../lib/supabaseClient';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { email } = req.body;

//   if (!email || !email.includes('@')) {
//     return res.status(400).json({ message: 'Invalid email address' });
//   }

//   const { error } = await supabase
//     .from('waitlist')
//     .insert([{ email }]);

//   if (error) {
//     console.error('Supabase Insert Error:', error);
//     return res.status(500).json({ message: 'Something went wrong' });
//   }

//   return res.status(200).json({ message: 'Successfully joined waitlist' });
// }

// import { supabase } from '../../lib/supabaseClient';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') return res.status(405).end();

//   const { email } = req.body;
//   if (!email || !email.includes('@')) {
//     return res.status(400).json({ error: 'Invalid email' });
//   }

//   const { data, error } = await supabase
//     .from('waitlist')
//     .insert([{ email }]);

//   if (error) return res.status(500).json({ error: error.message });

//   return res.status(200).json({ message: 'Success', data });
// }


import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }

    const { error } = await supabase
      .from('waitlist')
      .insert([{ email }]);

    if (error) {
      console.error('Supabase Insert Error:', error.message);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Success' });
  } catch (err) {
    console.error('Unexpected Server Error:', err.message);
    return res.status(500).json({ error: 'Server error.' });
  }
}
