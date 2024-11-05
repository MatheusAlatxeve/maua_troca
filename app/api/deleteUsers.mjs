// deleteUsers.mjs
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteUsers() {
    try {
        // Deleta usuários específicos pelo e-mail
        const deleteMarcos = await prisma.user.deleteMany({
            where: { email: 'marcos@gmail.com' },
        });
        const deleteMariana = await prisma.user.deleteMany({
            where: { email: 'mariana@gmail.com' },
        });
        const deleteUser1 = await prisma.user.deleteMany({
            where: { email: 'teste@example.com'}
        })

        console.log('Usuários deletados:', { deleteMarcos, deleteMariana, deleteUser1 });
    } catch (error) {
        console.error('Erro ao deletar usuários:', error);
    } finally {
        await prisma.$disconnect();
    }
}

deleteUsers();
