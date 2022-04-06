import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { getDataFromPokemon } from "../../service";
import { Link } from "react-router-dom";
import "./../../styles/flagsView.css";

const FlagsUpdate = () => {
  const [countrie, setCountrie] = useState([]);

  const { name } = useParams();
  const URL = "https://restcountries.com/v3.1/name";
  // console.log(name);
  // console.log(`${URL}/${name}`);

  const getFlagsDetail = async (URL, name) => {
    try {
      const response = await fetch(`${URL}/${name}`);
      const data = await response.json();
      return data;
      // console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchDetailFlags = async () => {
    const response = await getFlagsDetail(URL, name);
    setCountrie(response);
    // console.log('data inicial:',response);
  };

  useEffect(() => {
    fetchDetailFlags();
  }, []);

  const objectToArray = (object) => {
    if (object !== null || object !== undefined) {
      if (typeof object === "object") {
        const asArray = Object.entries(object);
        console.log("convertido a array:", asArray);
        const render = asArray.map(([key, value]) => {
          return value;
        });
        console.log("array con map:", render);
        console.log("tipo", typeof render);
        return render;
      } else {
        // console.log(typeof(property));
        return [];
      }
    }
  };

  // const dataArray = async (dataArray) =>{
  //   const dataArrayMap = await objectToArray(countrie[0]);
  //   return dataArrayMap;
  // };

  const dataArrayMap = objectToArray(countrie[0]);
  console.log("data Array Map", dataArrayMap);

  const renderCurrency = (object) => {
    // console.log('objeto que recibe para transformarlo',object);
    const currencies = objectToArray(object);
    const arrayCurrency = currencies.map((currency) => currency.name);
    // const arrayCurrency = object.map((currency) => currency.name)
    // console.log(arrayCurrency);
    let renderPropiedad = "";

    for (let i = 0; i < arrayCurrency.length; i++) {
      renderPropiedad += arrayCurrency[i];
      if (i < arrayCurrency.length - 1) {
        renderPropiedad += ", ";
      }
      // console.log(renderPropiedad);
    }
    return renderPropiedad;
  };

  const renderlanguages = (object) => {
    console.log("objeto que recibe para transformarlo", object);
    const languages = objectToArray(object);
    console.log("despues del toArray", languages);
    let renderPropiedad = "";
    // console.log(languages.length);

    for (let i = 0; i < languages.length; i++) {
      renderPropiedad += languages[i];
      if (i < languages.length - 1) {
        renderPropiedad += ", ";
      }
      // console.log(renderPropiedad);
    }
    return renderPropiedad;
  };

  // const currencyArrayMap = objectToArray(dataArrayMap[9]);
  // console.log('currency Array Map', currencyArrayMap);
  // const currenciesMapRender = renderCurrency(currencyArrayMap);
  // console.log('currencies render', currenciesMapRender);
  // const currenciesMapRender = renderCurrency(dataArrayMap[9]);
  // console.log('currencies render', currenciesMapRender);

  // const lenguajesArrayMap = objectToArray(dataArrayMap[15]);
  // console.log('lenguajes Array Map', lenguajesArrayMap);
  // console.log('tipo lenguajes Array Map', typeof(lenguajesArrayMap));
  // const lenguajesMapRender = renderlanguages(dataArrayMap[15]);
  // console.log('lenguajes render', lenguajesMapRender);
  // console.log('tipo lenguajes render', typeof(lenguajesMapRender));

  // const bordersMapRender = renderBorders(dataArrayMap[19]);
  // console.log("tipo", typeof bordersMapRender);
  // console.log("borders render", bordersMapRender);

  // const bordersMapRender = renderBorders(dataArray(countrie[0][19]);
  // console.log('tipo', typeof(bordersMapRender));
  // console.log('borders render', bordersMapRender );

  return (
    <>
      <div className="container">
        <h3>Where in the world</h3>
        <Link to={`/flags`}>
          <button>Back</button>
        </Link>
        {countrie.length > 0 &&
        <div className="grid">
          <div className="imagen">
            <img src={dataArrayMap[30].svg} className="img-countrie" alt="" />
          </div>
          <div className="info">
            <h3>{dataArrayMap[0].official}</h3>
            <div className="info-content">
              <p><span>Native Name:</span>&nbsp;{dataArrayMap[0].common}</p>
              <p><span>Continent:</span>&nbsp;{dataArrayMap[29][0]}</p>
              <p><span>Area:</span>&nbsp;{dataArrayMap[20]}</p>
              <p><span>Population:</span>&nbsp;{dataArrayMap[24]}</p>
              <p><span>Region:</span>&nbsp;{dataArrayMap[13]}</p>
              <p><span>Sub Region:</span>&nbsp;{dataArrayMap[14]}</p>
              <p><span>Capital:</span>&nbsp;{dataArrayMap[11][0]}</p>
              <p><span>Top Level Domain:</span>&nbsp;{dataArrayMap[1][0]}</p>
              <p><span>Currencies:</span>&nbsp;{renderCurrency(dataArrayMap[9])}</p>
              <p><span>Languages:</span>&nbsp;{renderlanguages(dataArrayMap[15])}</p>
              <p><span>Border Countries:</span>&nbsp;{dataArrayMap[19].map((border, index) => (
                  <Link to={`/flags/editar/${name}`} className="linkBorders">
                    <span className="btnBorders">{border}</span>
                  </Link>
              ))}</p>
            </div>
          </div>
        </div>
        }
      </div>
    </>
  );
};

export default FlagsUpdate;
