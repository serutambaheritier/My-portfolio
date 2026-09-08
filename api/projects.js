import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'server', 'data', 'projects.json');
    let data;

    if (fs.existsSync(filePath)) {
      data = fs.readFileSync(filePath, 'utf8');
    } else {
      const altPath = path.join(process.cwd(), 'data', 'projects.json');
      if (fs.existsSync(altPath)) {
        data = fs.readFileSync(altPath, 'utf8');
      } else {
        throw new Error('projects.json file not found.');
      }
    }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error('Error in /api/projects:', error);
    return res.status(500).json({ error: 'Failed to retrieve projects data.' });
  }
}
