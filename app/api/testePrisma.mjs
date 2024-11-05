// testPrisma.mjs
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedDatabase() {
    // Verifica se já existem usuários para evitar duplicação
    const existingUsers = await prisma.user.findMany();
    if (existingUsers.length === 0) {
        // Adiciona dados de exemplo
        const marcos = await prisma.user.create({
            data: {
                email: 'marcos@gmail.com',
                name: 'Marcos',
                password: 'Marcos123',
                currentRoom: '2/5/8',
                desiredRoom: '2/4/5'
            },
        });

        const mariana = await prisma.user.create({
            data: {
                email: 'mariana@gmail.com',
                name: 'Mariana',
                password: 'MarianaSenha482',
                currentRoom: '3/2/4',
                desiredRoom: '3/5/10'
            },
        });

        console.log({ marcos, mariana });
    } else {
        console.log('Usuários já existem. Seed não executado.');
    }
}

async function main() {
    await seedDatabase();
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
