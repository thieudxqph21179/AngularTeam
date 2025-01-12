import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const productsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        price: Number,
        image: 
        {
            type: String,
            require: true,
        },
        description: 
        {
            type: String,
            require: true,
        },
        categoryId: {
            type: mongoose.Types.ObjectId,
            ref: 'Category',
        },
    },
    { timestamps: true, versionKey: false },
);
productsSchema.plugin(mongoosePaginate);

export default mongoose.model('Products', productsSchema);
