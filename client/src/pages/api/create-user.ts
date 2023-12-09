import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_password',
  port: 5432, // Change it according to your configuration
});

export default async function createUserHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const client = await pool.connect();
    try {
      const client = await pool.connect();
      await client.query('BEGIN');

      const createUserQuery = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
      const newUser = await client.query(createUserQuery, [username, password]);

      await client.query('COMMIT');
      client.release();

      res.status(200).json({ success: true, user: newUser.rows[0] });
    } catch (error) {
      client.release();
      res.status(500).json({ success: false, error: error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
