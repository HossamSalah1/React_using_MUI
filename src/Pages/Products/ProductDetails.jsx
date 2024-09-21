import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import axiosInstance from "../../AxiosConfig/AxiosConfig";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function ProductDetails() {
  // const { id } = useParams();
  // //console.log(id);
  const product = useLoaderData()
  // const [product, setProduct] = useState({});
  // async function getProductById() {
  //   try {
  //     const res = await axiosInstance.get(`/products/${id}`);
  //     console.log(res.data);
  //     setProduct(res.data);
  //     //  console.log(product);

  //     //console.log(product);
  //     //console.log(product);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   getProductById();
  // }, []);
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {product.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export const loader = async (arg) => {

  const res = await axiosInstance.get(`/products/${arg.params.id}`);
  return res.data

}
