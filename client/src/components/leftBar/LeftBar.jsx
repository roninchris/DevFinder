import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={"/upload/" +currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Conexões</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Vagas</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Eventos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Mensagens</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Outros</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Arrecadação de Projetos</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutoriais</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Cursos</span>
          </div>
          <div>
            <h2>REGRAS DA COMUNIDADE</h2>
            <br></br>
            <li>Coloque sempre a tag [Vaga/Projeto] e seu Valor (caso seja remunerado)</li>
            <br></br>
            <li>Para posts OffTopic não é necessário tageamento</li>
            <br></br>
            <h4>Caso ocorram descumprimento das regras</h4>
            <h4>o post será removido.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
