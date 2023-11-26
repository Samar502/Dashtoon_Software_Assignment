// libs
import { useState } from "react";

// components
import { Button } from "@mui/material";

// api
import { query } from "./api/query";

// constants
import { NO_OF_PANELS } from "../constants";

// styles
import styles from "./styles.module.css";

const PanelInputForm = ({
  setIsLoading,
  setComicImageSrcList,
  setIsSnackBarOpen,
}) => {
  const [panelTexts, setPanelTexts] = useState(Array(NO_OF_PANELS).fill(""));
  const handleChange = (index, value) => {
    const newPanelTexts = [...panelTexts];
    newPanelTexts[index] = value;
    setPanelTexts(newPanelTexts);
  };
  
  const generateComic = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    query({ dataList: panelTexts })
      .then((response) => {
        const ImageSrcs = response.map((result) => URL.createObjectURL(result));
        console.log("ImageSrcs : ", ImageSrcs);
        setComicImageSrcList(ImageSrcs);
        setIsSnackBarOpen(true);
      })
      .catch((error) => {
        setIsSnackBarOpen(true);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Get AI produced Images at will
      </h2>
      <form>
        <div className={styles.inputGrid}>
          {panelTexts.map((text, index) => (
            <div
              key={index}
              style={{
                minWidth: "45%",
                display: "flex",
              }}
            >
              <input
                type="text"
                id={`panel${index + 1}`}
                value={text}
                placeholder={`Panel ${index + 1}`}
                onChange={(e) => handleChange(index, e.target.value)}
                required
              />
            </div>
          ))}
        </div>

        <Button variant="contained" type="submit" onClick={generateComic}>
          Generate Comic
        </Button>
      </form>
    </div>
  );
};

export { PanelInputForm };
