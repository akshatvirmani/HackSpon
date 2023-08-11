import React from "react";
import {
  Box,
  ThemeProvider,
  Grid,
  CircularProgress,
  Button,
} from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import List from "./components/List/List";
import NewModel from "./components/List/NewModel";
import Ddata from "./dummyData";
import { firestore, app } from "./Firebase/config";
import { useState } from "react";
import { useEffect } from "react";
import { Close as CloseIcon } from "@material-ui/icons";
import ViewListModel from "./components/List/ViewListModel";

export default () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [newListModel, setNewListModel] = useState(false);
  const [viewList,setViewList]=useState({});
  const fetchList = async () => {
    setLoading(true);
    const req = await firestore
      .collection("list")
      .orderBy("postedOn", "desc")
      .get();
    const tempList = req.docs.map((list) => ({
      ...list.data(),
      id: list.id,
      postedOn: list.data().postedOn.toDate(),
    }));
    setList(tempList);
    setLoading(false);
  };

  const fetchListCustom = async (listSearch) => {
    setCustomSearch(false);
    setLoading(true);
    setCustomSearch(true);
    const req = await firestore
      .collection("list")
      .orderBy("postedOn", "desc")
      .where("scale", "==", listSearch.scale)
      .where("type", "==", listSearch.type)
      .get();
    const tempList = req.docs.map((list) => ({
      ...list.data(),
      id: list.id,
      postedOn: list.data().postedOn.toDate(),
    }));
    setList(tempList);
    setLoading(false);
  };

  const postList = async (details) => {
    await firestore.collection("list").add({
      ...details,
      postedOn: app.firestore.FieldValue.serverTimestamp(),
    });
    fetchList();
  };

  useEffect(() => {
    fetchList();
  }, []);
  

  return (
    <ThemeProvider theme={theme}>
      <Header openNewListModel={() => setNewListModel(true)} />
      <NewModel
        closeModel={() => setNewListModel(false)}
        newListModel={newListModel}
        postList={postList}
      />
      <ViewListModel list={viewList} closeModel={()=>setViewList({})} />
      <Box mb={3}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <SearchBar fetchListCustom={fetchListCustom} />

            {loading ? (
              <Box display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
            ) : (
              <>
                {customSearch && (
                  <Box my={2} display="flex" justifyContent="flex-end">
                    <Button onClick={fetchList}>
                      <CloseIcon size={20} />
                      Custom Search
                    </Button>
                  </Box>
                )}
                {list.map((list) => (
                  <List open={()=>setViewList(list)} key={list.id} {...list} />
                ))}
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
