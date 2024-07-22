const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let product = [{
        id: 1,
        name: 'laptop',
        category: 'Elektronik'
    },
    {
        id: 2,
        name: 'meja',
        category: 'Perabotan'
    },
];

// Method GET mengambil semua data
app.get('/api/product', (req, res) => {
    res.json(product)
})

// Method GET berdasarkan ID pada Params
app.get('/api/product/:id', (req, res) => {
    const findproductId = parseInt(req.params.id)
    const productId = product.find(item => item.id === findproductId);
    if (productId) {
        res.json(productId)
    } else {
        res.status(404).json({ message: 'Product not found!' })
    }
})

// Method GET berdasarkan Query Name
app.get('/api/product/name/search', (req, res) => {
    const name = req.query.q.toLowerCase();
    const filterProductNama = product.filter(item => item.name.toLowerCase() === name);
    if (filterProductNama.length > 0) {
        res.json(filterProductNama);
    } else {
        res.status(404).json({ message: 'Product not found!' })
    }
})

// Method GET berdasarkan Query dari Category
app.get('/api/product/category/search', (req, res) => {
    const category = req.query.q.toLowerCase();
    const filterProduct = product.filter(item => item.category.toLowerCase() === category);
    if (filterProduct.length > 0) {
        res.json(filterProduct);
    } else {
        res.status(404).json({ message: 'Product not found!' })
    }
})

// Method GET Parameter dan Query String berdasarkan kategori dan mencari berdasarkan nama
app.get('/api/product/filter/:category', (req, res) => {
    const queryName = req.query.q.toLowerCase();
    const category = req.params.category.toLowerCase();
    const filterProduct = product.filter(item => item.category.toLowerCase() === category && item.name.toLowerCase().includes(queryName));
    if (filterProduct.length > 0) {
        res.json(filterProduct);
    } else {
        res.status(404).json({ message: 'Product not found!' })
    }
})

// Method POST untuk Menambahkan Data
app.post('/api/product', (req, res) => {
    const newProduct = req.body;
    newProduct.id = product.length ? product[product.length - 1].id + 1 : 1;
    product.push(newProduct);
    res.status(201).json(newProduct);
})

// Method PUT untuk Update Data
app.put('/api/product/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = product.findIndex(item => item.id === id);
    if (productIndex !== -1) {
        product[productIndex] = { id: id, ...req.body };
        res.json(product[productIndex]);
    } else {
        res.status(404).json({ message: 'Product not found!' });
    }
});

// Method DELETE untuk Delete Data
app.delete('/api/product/:id', (req, res) => {
    const id = parseInt(req.params.id);
    product = product.filter(item => item.id !== id);
    res.status(204).send();
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});