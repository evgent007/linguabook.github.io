import React from "react";
import { Box, Image } from "@chakra-ui/react";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import SoundIcon from "./SoundIcon";
import styles from "./Slide.module.scss";

type Text = {
  text: string;
  lang: string;
};

type Props = {
  src: string;
  text: Text;
  transcription?: string;
  translations?: Text[];
  audio?: { url: string };
};

const fallbackSrc =
  "https://images.unsplash.com/photo-1580374004682-23dec7298a3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1997&q=80";

// TODO responsive font size
const Slide: React.FC<Props> = ({
  src,
  text,
  transcription,
  audio,
  translations,
}) => {
  return (
    <Box position="relative" maxHeight={640}>
      <Image
        src={src}
        fallbackSrc={fallbackSrc}
        alt={text.text}
        fit="cover"
        maxHeight={640}
      />
      <Box className={styles.overlay} />
      <Box className={styles.text_container}>
        <Box>
          <Box className={styles.label} fontSize="42px" fontWeight="bold">
            {text.text}
          </Box>
          <Box className={styles.label} fontSize="18px">
            {audio ? <SoundIcon url={audio.url} /> : null}
            <span>{transcription}</span>
          </Box>
          {isEmpty(translations)
            ? null
            : map(translations, (t, k) => (
                <Box className={styles.label} key={k}>
                  {t.text}
                </Box>
              ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Slide;
