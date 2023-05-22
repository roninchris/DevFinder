import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Sugestões para você</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://www.looper.com/img/gallery/everything-the-imitation-game-doesnt-tell-you-about-the-true-story/intro-1619794530.jpg"
                alt=""
              />
              <span>Alan Turing</span>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Excluir</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://s2.glbimg.com/paF5KTEVGzMU-ZcZa2mjYicNDjM=/e.glbimg.com/og/ed/f/original/2015/03/09/ada.jpg"
                alt=""
              />
              <span>Ada Lovelace</span>
            </div>
            <div className="buttons">
              <button>Seguir</button>
              <button>Excluir</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Últimas atividades</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://64.media.tumblr.com/9248d99739bd3417bc445024e05849bf/f81399c6e624a79e-a6/s1280x1920/92a02aee08924b3ddfdc4ed0d062377d17710abd.jpg"
                alt=""
              />
              <p>
                <span>Miyamoto Musashi</span> mudou a foto de capa
              </p>
            </div>
            <span>há 1 minuto</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://static.thenounproject.com/png/369842-200.png"
                alt=""
              />
              <p>
                <span>Bill Gates</span> mudou a foto de perfil
              </p>
            </div>
            <span>há 10 minutos</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://assets.editorial.aetnd.com/uploads/2009/11/portrait-of-john-smith.jpg"
                alt=""
              />
              <p>
                <span>John Smith</span> mudou a foto de capa
              </p>
            </div>
            <span>há 1 hora</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://legadodadc.com.br/wp-content/uploads/2022/08/clark-kent-superman-legadodadc.webp"
                alt=""
              />
              <p>
                <span>Clark Kent</span> mudou a foto de capa
              </p>
            </div>
            <span>há 1 hora</span>
          </div>
        </div>
        <div className="item">
          <span>Amigos Online</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.indianexpress.com/2021/10/jessi-eisenberg-1200.jpg"
                alt=""
              />
              <div className="online" />
              <span>Mark Zuckerberg</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.insider.com/5f7b239a282c500018c7887f?width=1000&format=jpeg&auto=webp"
                alt=""
              />
              <div className="online" />
              <span>Eduardo Saverin</span>
            </div>
          </div>
          <div className="user">
            
            </div>
          </div>
        </div>
      </div>
  );
};

export default RightBar;
