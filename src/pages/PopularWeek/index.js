import { useState, useEffect, useContext } from "react";
import { Container, Grid, Button } from "@mui/material";
import "./index.css";
import { getProductClothes } from "../../service/firestore";
import { UserContext } from "../../Context/UserContext";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

// import foto1 from "../../assets/image/foto1.png";
// import foto2 from "../../assets/image/foto2.png";
// import foto3 from "../../assets/image/foto3.png";
// import foto4 from "../../assets/image/foto4.png";

const PopularWeek = () => {
  // const [clothes, setClothes] = useState([
  //   {
  //     photo: foto1,
  //     name: "",
  //     price: 120.23,
  //     price_with_disscount: 120.23,
  //   },
  //   {
  //     photo: foto2,
  //     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //     price: 100,
  //     price_with_disscount: 90,
  //   },
  //   {
  //     photo: foto3,
  //     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //     price: 150.11,
  //     price_with_disscount: 140.24,
  //   },
  //   {
  //     photo: foto4,
  //     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //     price: 120.23,
  //     price_with_disscount: 105.23,
  //   },
  // ]);


  const { basket, storeBasket, deleteElementFromBasket } = useContext(UserContext);

  const [clothes, setClothes] = useState([]);

  const fetchClothes = async () => {
    const data = await getProductClothes();
    setClothes(data);
  };

  // Vamos a crear un componente que reciba el id del producto y verifique si
  // este existe en basket
  // props es un objeto
  // clothe es un elemento del objeto
  // props.clothe
  // que dice destructurcion
  // {clothe} = props
  //* Para pasar un parametro a un componente debe pasarle entre corchetes
  const ButtonForProduct = ({ clothe }) => {
    const findProduct = basket.find((bas) => bas.id === clothe.id);

    return(
      <>
        {findProduct ? (
          <Button onClick={() => deleteElementFromBasket(clothe.id)} color="error">
            <DeleteForeverRoundedIcon />
          </Button>
        ):(
        <Button
          onClick={() => storeBasket(clothe)}
          className="button-basket"
        >
          + Add to Basket
        </Button>
        )}
      </>
    )
  };

  useEffect(() => {
    fetchClothes();
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={5}>
        <Grid item md={12} sm={12} xs={12}>
          <h2 className="center">POPULAR WEEK</h2>
        </Grid>
        {clothes.length > 0 &&
          clothes.map((clothe) => (
            <Grid item md={3} sm={6} xs={12}>
              <img className="product-photo" src={clothe.photo} alt="" />
              <div className="description">
                <p>{clothe.name}</p>
                <p className="container-buttons">
                  <span className="price">$ {clothe.price_sale}</span>
                  <span className="price-tacched">$ {clothe.price}</span>
                  <ButtonForProduct clothe={clothe} />
                </p>
              </div>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default PopularWeek;
