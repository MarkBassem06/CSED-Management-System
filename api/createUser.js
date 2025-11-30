import prisma from './lib/prisma.js';
import bcrypt from 'bcrypt';

async function createUser() {
  try {
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    const user = await prisma.user.create({
      data: {
        username: 'john_doe',
        email: 'john.doe@example.com',
        password: hashedPassword,
        isAdmin: false
      }
    });
    
    console.log('User created successfully:');
    console.log('Username:', user.username);
    console.log('Email:', user.email);
    console.log('ID:', user.id);
    console.log('Created At:', user.createdAt);
    
  } catch (error) {
    console.error('Error creating user:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
