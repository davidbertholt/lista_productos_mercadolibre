import { useParams } from "react-router-dom";

interface ProductDetailsInterface {}

const ProductDetails: React.FC<ProductDetailsInterface> = () => {
  const params = useParams();

  return <>Hola Item {params.id}</>;
};

export default ProductDetails;
