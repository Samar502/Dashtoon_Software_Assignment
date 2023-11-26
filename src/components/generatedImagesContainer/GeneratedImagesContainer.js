// components
import CircularProgress from "@mui/material/CircularProgress";

// styles
import styles from "./styles.module.css";

const GeneratedImagesContainer = ({ isLoading, comicImageSrcList }) => {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <CircularProgress color="secondary" size="2rem" />
      ) : comicImageSrcList?.length > 0 ? (
        <div className={styles.inputGrid}>
          {comicImageSrcList.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt="AI generated comic"
                height="100%"
                width="100%"
              />
            </div>
          ))}
        </div>
      ) : (
        <h2
          style={{
            textAlign: "center",
          }}
        >
          DASHTOON AI IMAGES
        </h2>
      )}
    </div>
  );
};

export { GeneratedImagesContainer };
