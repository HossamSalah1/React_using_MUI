import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../AxiosConfig/AxiosConfig";
import { useSelector } from "react-redux";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
export default function Products() {

  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const loader = useSelector((state) => state.loader.loader)

  useEffect(() => {
    axiosInstance
      .get("/products", {
        params: {

        },

      }
      )
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.post()
  }, []);




  return <>



    {(loader) ? <div>
      <Segment>
        <Dimmer active>
          <Loader size='massive'>Loading</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>
    </div> :
      (
        <Grid container spacing={5}>
          {products.map((prd) => (
            <Grid item xs={12} sm={6} md={4} key={prd.id}>
              
              <Box display="flex" flexDirection="column" height="100%">
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={prd.image}
                      alt={prd.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {prd.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {prd.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <button className="btn btn-primary" onClick={() => {
                    navigate(`/productDetails/${prd.id}`)
                  }}> details</button>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      )
    }
  </>
}
