import Product from "../models/Product.js"
import User from "../models/User.js"

export const createProduct = async (req, res, next) => {
    try {
        const newProduct = new Product(req.body)
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    } catch (error) {
        next(error)
    }
}
export const updateProduct = async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        next(err);
    }
};
export const deleteProduct = async (req, res, next) => {
    const ProductId = req.params.id
    try {
        await Product.findByIdAndDelete(ProductId);
        res.status(200).json("Product has been deleted.");
    } catch (err) {
        next(err);
    }
};
export const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (err) {
        next(err);
    }
};

export const getLikedProducts = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        const likedProducts = await Product.find({ _id: { $in: user.liked } });
        res.status(200).json(likedProducts);
    } catch (err) { 
        next(err);
    }
}

export const likeProduct = async (req, res, next) => {
    const userId = req.body.userId;
    const productId = req.params.productId;
    try {
        const user = await User.findById(userId);
        if (user.liked.includes(productId)) {
            user.liked = user.liked.filter((id) => id !== productId);
        } else {
            user.liked.push(productId);
        }
        await user.save();
        res.status(200).json("Product has been liked.");
    }
    catch (err) {
        next(err);
    }
}

export const getProducts = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const allProducts = await Product.find({
            ...others,
            cheapestPrice: { $gt: min | 1, $lt: max || 999 },
        }).limit(req.query.limit)
        res.status(200).json(allProducts)
    } catch (err) {
        next(err);
    }
};

export const getProductsByCity = async (req, res, next) => {
    const userCity = req.params.city;
    try {
        const products = await Product.find({ city: userCity });
        res.status(200).json(products);
    } catch (err) {
        next(err);
    }
};

export const randomDisplay = async (req, res, next) => {
    const category = req.query.category;
    try {
        const products = await Product.find({ category: category });
        const indices = new Set();
        while (indices.size < products.length) {
            const index = Math.floor(Math.random() * (products.length));
            indices.add(index);
        }
        const selectedProducts = Array.from(indices).map(index => products[index]);
        res.status(200).json(selectedProducts);
    } catch (err) {
        next(err);
    }
};