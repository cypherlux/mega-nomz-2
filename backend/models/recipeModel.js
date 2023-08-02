import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const recipeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    source: {
      type: String,
      required: true,
    },
    sourceURL: {
        type: String,
        required: true,
    },
    ingredients: {
        type: Array,
        required: true,
    },
    instructions: {
        type: Array,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    },
    mealTime: {
      type: String,
      required: true,
    },
    mealType: {
      type: String,
      required: true,
    },
    temperature: {
      type: String,
      required: true,
    },
    bulk: {
      type: Boolean,
      required: true,
      default: false,
    }
}, {
    timestamps: true,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;


