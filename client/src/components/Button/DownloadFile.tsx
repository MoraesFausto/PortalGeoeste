import axios from "axios";
import React, { useState } from "react";
import { DateTime } from "luxon";
import { useDownload } from "../../hooks/useDownload";
import { Button, ButtonState } from "./Button";
import { Alert, Container } from "react-bootstrap";
import { DownloadBtn } from "./style";
import { Navigate } from "react-router-dom";

function Download({param:id, p:pos, l:lef}) {
  const path = "/api/Data/mapas/"+ String(id) + "/download"
  const DownloadFile: React.FC = () => {
  const [buttonState, setButtonState] = useState<ButtonState>(
    ButtonState.Primary
  );
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const preDownloading = () => setButtonState(ButtonState.Loading);
  const postDownloading = () => setButtonState(ButtonState.Primary);

  const onErrorDownloadFile = () => {
    setButtonState(ButtonState.Primary);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const getFileName = () => {
    return DateTime.local().toISODate() + String(id) + ".zip";
  };

  const downloadFile = () => {
    // throw new Error("uncomment this line to mock failure of API");
    return axios.get(
      path,
      {
        responseType: "blob",
        /* 
        headers: {
          Authorization: "Bearer <token>", // add authentication information as required by the backend APIs.
        },
         */
      }
    );
  };

  const { ref, url, download, name } = useDownload({
    apiDefinition: downloadFile,
    preDownloading,
    postDownloading,
    onError: onErrorDownloadFile,
    getFileName,
  });

  return (
    <Container className="mt-5">
      <Alert variant="danger" show={showAlert}>
        <Navigate to='/login'/>
      </Alert>
      <DownloadBtn p={pos} l={lef}>
      <a href={url} download={name} className="hidden" ref={ref} />
      <div>
      <Button label="Download" buttonState={buttonState} onClick={download} />
      </div>
      </DownloadBtn>
    </Container>
  );
}
return (<DownloadFile/>)
};

export default Download;