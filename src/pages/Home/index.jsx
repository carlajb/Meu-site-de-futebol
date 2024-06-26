import Header from '../../Components/Header/Header.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
// import CustomButton from '../../Components/Btn_Cadastro/Btn_cadastro';
import gol_de_salto_page from '../../Assets/gol_de_salto_page.jpg';
function Home() {
  return (
    <>
      <div>
        <section className="grid">
          <figure className="img-logo">
            <img src={gol_de_salto_page} alt="imagem da home com logo"></img>
          </figure>
        </section>
        {/* <CustomButton to="/cadastro" text="LOGIN / CADASTRO" /> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
