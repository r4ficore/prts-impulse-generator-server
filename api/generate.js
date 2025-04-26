export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { recipient_id, pulse_text, pulse_type, valid_until } = req.body;

  if (!recipient_id || !pulse_text || !pulse_type) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const pulse = {
    recipient_id,
    pulse_text,
    pulse_type,
    valid_until: valid_until || null,
  };

  return res.status(200).json({
    success: true,
    pulse,
  });
}
