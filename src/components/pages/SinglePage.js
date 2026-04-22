import { useState, useEffect } from "react";
import { useParams } from "react-router"
import AppBanner from "../appBanner/AppBanner";
import useMarvelService from "../../services/marvelService";
import setContent from "../../utils/setContent";

const SinglePage = ({Component, dataType}) => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const { clearError, getComic, getCharacter,  setProcess, process} = useMarvelService();
  
  useEffect(() => {
    updateData();
  }, [id]);

  const updateData = () => {
    clearError();

    switch (dataType) {
      case 'comic':
        getComic(id).then(onDataLoaded).then(() => setProcess('confirmed'));
        break;
      case 'character':
        getCharacter(id).then(onDataLoaded).then(() => setProcess('confirmed'));
        break;
      default:
        break;
    }
  }

  const onDataLoaded = (data) => {
    setData(data);
  }

  return (
    <>
    <AppBanner/>
      {setContent(process, Component, data)}
    </>
  )
}

export default SinglePage;