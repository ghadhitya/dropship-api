const fastify = require('fastify')({ logger: true });

fastify.get('/', async (req, res) => {
  return { message: 'Halo bro, ini API Fastify kamu di Render sudah jalan!' };
});

fastify.get('/produk', async (req, res) => {
  return [
    { id: 1, nama: 'Kaos Jepang', harga: 99000 },
    { id: 2, nama: 'Celana Anime', harga: 129000 },
    { id: 3, nama: 'Jaket Jepang', harga: 199000 }
  ];
});

fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
