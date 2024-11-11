import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT id, title, content, created_at 
      FROM posts 
      ORDER BY created_at DESC
    `);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();
    const result = await pool.query(
      `INSERT INTO posts (title, content) 
       VALUES ($1, $2) 
       RETURNING id, title, content,`,
      [title, content]
    );
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to create post' }, 
      { status: 500 }
    );
  }
}