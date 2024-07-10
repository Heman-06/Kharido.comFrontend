import './ProductDescription.css'

const ProductDescription = ({ description }) => {
  // console.log(description); // Log the description prop
  return (
      <div>
          <h2>Product Description</h2>
          <p>{description}</p>
      </div>
  );
};

export default ProductDescription