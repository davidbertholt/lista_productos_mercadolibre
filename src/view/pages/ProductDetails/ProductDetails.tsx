import { fetchProduct, startLoadingProductDetail } from "@/infrastructure/redux";
import { AppDispatch, AppStore } from "@/infrastructure/redux/store";
import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { styled } from "styled-components";

interface ProductDetailsInterface {}

const ProductDetails: React.FC<ProductDetailsInterface> = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { product_detail, isLoading } = useSelector(
    (state: AppStore) => state.product
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if(
      params.id !== undefined && 
      typeof params.id === 'string'
    ) {
      dispatch(startLoadingProductDetail(true))
      dispatch(fetchProduct(params.id));
    } else {
      navigate("/list");
    }
  }, []);

  return (
    <DetailContainer>
      {isLoading ? (
        <LoadingContainer>
          <h5>Loading...</h5>
        </LoadingContainer>
      ) : (
        product_detail && (
          <ContainerPrincipal>
            <ImageContainer>
              <img src={product_detail.pictures[0]?.url || product_detail.thumbnail} />
            </ImageContainer>
            <ContainerSoldData>
              <span>
                {`${product_detail.condition} - ${product_detail.sold_quantity} sold`}
              </span>
              <Typography  align={"left"} variant={"h6"}>{product_detail.title}</Typography>
              <h1>${product_detail.price}</h1>
              <Button
                variant="contained"
                onClick={() => alert(`Buy item: ${product_detail.id}`)}
              >
                Buy
              </Button>
            </ContainerSoldData>
            <DescriptionContainer>
              <Typography align={"left"} variant="h5">{product_detail.title}</Typography>
              <Typography align={"left"} variant="subtitle2">
                {product_detail.description}
              </Typography>
            </DescriptionContainer>
          </ContainerPrincipal>
        )
      )}
    </DetailContainer>
  );
};

export default ProductDetails;

const DetailContainer = styled.div`
  background-color: white;
  width: 80%;
  min-height: 75vh;
  display: flex;
  padding-top:3rem;

`;

const ImageContainer = styled.div`
  min-width: 70%;
  max-height: 50%;
`;

const DescriptionContainer = styled.div`
background-color: white;
  display:flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
`;

const ContainerSoldData = styled.div`
  width: 25%;
  max-height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 10vh;
`;

const ContainerPrincipal = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left : 50%;
`;

