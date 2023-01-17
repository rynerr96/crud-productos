import axios from "axios"
import { useEffect, useState } from "react";

function requests(url, body, id) {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const getData = async () => {
    setIsLoad(true);
    try {
      const reply = await axios.get(`${url}`)
      if (reply.status === 200) {
        setData(reply.data);
      };
    } catch (error) {
      setIsError(true);

    } finally {
      setIsLoad(false);
    };
  };

  const getDataEffect = ()=> useEffect(() => {
    getData()
  }, []);

  //time in screen 
  function timeInScreen(setHook) {
    setHook(true)
    setTimeout(() => {
      setHook(false)
    }, 3000)
  }

  //  POST request 
  const postData = async () => {
    setIsLoad(true)
    try {
      const reply = await axios.post(`${url}`, body);
      if (reply.status === 201) {
        getData();
        timeInScreen(setIsCreated);
      }
    } catch (error) {
      setIsError(true);

    } finally {
      setIsLoad(false)
    };
  }

  //DEL request
  const deleteData = async () => {
    setIsLoad(true)
    try {
      const reply = await axios.delete(`${url}${body}.${id}}/`);
      if (reply.status === 204) {
        getData();
        timeInScreen(setIsDeleted);
      }
    } catch (error) {
      setIsError(true);

    } finally {
      setIsLoad(false)
    };
  };

  //PUT request
  const putData = async () => {
    setIsLoad(true)
    try {
      const reply = await axios.put((`${url}${body}.${id}}/`), body);
      if (reply.status === 200) {
        getData();
        timeInScreen(setIsUpdate);
      }
    } catch (error) {
      setIsError(true);

    } finally {
      setIsLoad(false)
    };
  }


  return {
    //PETICION GET
    getData,
    data,
    getDataEffect,
    isError,
    isLoad,
    //PETICION POST
    postData,
    isCreated,
    //PETICION  Delete
    deleteData,
    isDeleted,
    //PETICION UPDATE
    putData,
    isUpdate
  }
}

export default requests