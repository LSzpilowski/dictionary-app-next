import React from "react";
import * as S from "./Photos.styles";

export const Photos = (props) => {

  if (props.photos) {
    return (
      <S.Photos>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="image-fluid"
                    alt=""
                  />
                </a>
              </div>
            );
          })}
        </div>
      </S.Photos>
    );
  } else {
    return null;
  }
};
