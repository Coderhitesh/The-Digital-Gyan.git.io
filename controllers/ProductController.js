const Product = require('../modals/product.modal')

// create new product 

exports.createProduct = async(req, res) => {
    try {
        const {
            name,
            description,
            img,
            feature
        } = req.body
        // console.log(req.body)
        if(!name || !description || !img || !feature){
           return  res.status(403).json({
                success: false,
                message: 'All fields are required'
            })
        }

        const newProduct = new Product({
            name,
            description,
            img,
            feature
        })

        await newProduct.save()

        res.status(200).json({
            success : true,
            message : 'New product created successfully',
            data : newProduct
        })

    } catch (error) {
        // console.log(error);
        return res.status(500).json({
            success : false,
            data:error,
            message: "Server error"
        })
    }
}

// show all product 

exports.getAllProduct = async(req,res) => {
    try {
        const AllProduct = await Product.find()
        res.status(200).json({
            success : true,
            message : 'All Product',
            data : AllProduct
        })
    } catch (error) {
        console.log(error)
        res.status(501).json({
            success : false,
            message : 'Internal Server'
        })
    }
}

// delete single product 

exports.deleteSingleProduct = async (req , res)=> {
    try {
        const id = req.params.id;
        // console.log(id)
        const deletedProduct = await Product.findByIdAndDelete({_id : id})
        if (deletedProduct.deletedCount === 0){
            return res.status(404).json ({
                success : false,
                message : 'No such product found'
            });
        } else{
            res.status(200).json({
              success : true,
              message : `Deleted products`,
              data : deletedProduct
          })
        }
    } catch (error) {
        console.log(error)
        res.status(501).json({
            success: false,
            message : 'Internal Error'
        })
    }
}

exports.singleProduct = async (req,res) => {
    try {
        const id = req.params.id
        const SingleProduct = await Product.findById(id);
        if(SingleProduct === null){
            res.status(404).json({
                success : false,
                message : "Product not Found"
            })
        }

        res.status(200).json({
            success : true,
            message : "Product Founded",
            data : SingleProduct
        })
    } catch (error) {
        console.log(error)
        res.status(501).json({
            success: false,
            message: "Server error"
        })
    }
}