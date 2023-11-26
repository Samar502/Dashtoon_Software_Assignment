// libs
import { useState, forwardRef } from "react";

// components
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Navbar } from "./components/navbar/Navbar";
import { PanelInputForm } from "./components/panelInputForm/PanelInputForm";
import { GeneratedImagesContainer } from "./components/generatedImagesContainer/GeneratedImagesContainer";

// styles
import "./App.css";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const getSnackbarMessage = ({ comicImageSrcList }) => {
  const filteredComicSrcList = comicImageSrcList?.filter(
    (comicImageSrc) => comicImageSrc !== undefined
  );

  if (filteredComicSrcList?.length === comicImageSrcList?.length)
    return { severity: "success", message: "Image fetch successful" };

  return { severity: "warning", message: "Failed to fetch some Images!" };
};
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [comicImageSrcList, setComicImageSrcList] = useState([]);
  const [isSnackbarOpen, setIsSnackBarOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <section className="wrapper w-60">
          <PanelInputForm
            setComicImageSrcList={setComicImageSrcList}
            setIsLoading={setIsLoading}
            setIsSnackBarOpen={setIsSnackBarOpen}
          />
        </section>
        <section className="wrapper w-60">
          <GeneratedImagesContainer
            isLoading={isLoading}
            comicImageSrcList={comicImageSrcList}
          />
        </section>
      </main>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => setIsSnackBarOpen(false)}
      >
        <Alert
          onClose={() => setIsSnackBarOpen(false)}
          severity={
            comicImageSrcList
              ? getSnackbarMessage(comicImageSrcList).severity
              : "error"
          }
          sx={{ width: "100%" }}
        >
          {comicImageSrcList
            ? getSnackbarMessage(comicImageSrcList).message
            : "Error Fetching Data, Try again!"}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
