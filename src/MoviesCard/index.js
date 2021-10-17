import { AiOutlineHeart, AiFillStar, AiOutlineFileImage } from "react-icons/ai";
import React from "react";

const MoviesCard = () => {
  return (
    <div className="card">
      <div className="carimg">
        <span className="iconcopreh">
          <AiOutlineHeart />
        </span>
        <div className="heartimg">
          <img src="" alt="" />
          <AiOutlineFileImage />
          <p className="datanum">7 de janeiro de 2010</p>
        </div>
      </div>
      <div className="boxtwo">
        <h1 className="titlemovie">Nome do filme</h1>
        <span className="iconcopre">
          <AiFillStar />
        </span>
        <span>7</span>
        <span>Gênero</span>
        <p>R$ 79,90</p>
      </div>
      <button className="btnadd">Adicionar</button>
    </div>
  );
};

export default MoviesCard;
