import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getItemsFromAPI, getItemsFromAPIByCategory } from "../../services/firebase";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import FlexWrapper from "../FlexWrapper/FlexWrapper";


function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryid } = useParams();


  useEffect(() => {
    setIsLoading(true);
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid)
      .then((itemsDB) => {
        setProductsList(itemsDB);
      })
      .catch( error=>{
        setFeedbackMsg(error.message)
      })
      .finally( () => setIsLoading(false))
    } else {
      getItemsFromAPI()
      .then((itemsDB) => {
        setProductsList(itemsDB);
      })
      .finally( () => setIsLoading(false))
    }
  }, [categoryid]);

  if (isLoading)
  return (
    <FlexWrapper>
      <Loader size={60} />
    </FlexWrapper>
  );

return <ItemList feedbackMsg={feedbackMsg} productsList={productsList} />;
}

export default ItemListContainer;