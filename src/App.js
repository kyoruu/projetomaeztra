function App() {
  return (
    <div className="App">
      <header id="home" class="welcome-hero">
        <div
          id="header-carousel"
          class="carousel slide carousel-fade mobile"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to="0" class="active">
              <span class="small-circle"></span>
            </li>
            <li data-target="#header-carousel" data-slide-to="1">
              <span class="small-circle"></span>
            </li>
            <li data-target="#header-carousel" data-slide-to="2">
              <span class="small-circle"></span>
            </li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <div class="single-slide-item slide1">
                <div class="container">
                  <div class="welcome-hero-content">
                    <div class="row">
                      <div class="">
                        <div class="single-welcome-hero">
                          <div class="welcome-hero-img">
                            <img
                              src="assets/images/banner1.png"
                              alt="slider image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="single-slide-item slide2">
                <div class="container">
                  <div class="welcome-hero-content">
                    <div class="row">
                      <div class="">
                        <div class="single-welcome-hero">
                          <div class="welcome-hero-img">
                            <img
                              src="assets/images/banner1.png"
                              alt="slider image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="header-carousel desktop"
          class="carousel slide carousel-fade desktop"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to="0" class="active">
              <span class="small-circle"></span>
            </li>
            <li data-target="#header-carousel" data-slide-to="1">
              <span class="small-circle"></span>
            </li>
            <li data-target="#header-carousel" data-slide-to="2">
              <span class="small-circle"></span>
            </li>
          </ol>
          <div class="carousel-inner resDesktop" role="listbox">
            <div class="item active">
              <div class="single-slide-item slide1">
                <div class="container">
                  <div class="welcome-hero-content">
                    <div class="row">
                      <div class="">
                        <div class="single-welcome-hero">
                          <div class="welcome-hero-img">
                            <img
                              src="assets/images/banner1desk.png"
                              alt="slider image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="single-slide-item slide2">
                <div class="container">
                  <div class="welcome-hero-content">
                    <div class="row">
                      <div class="">
                        <div class="single-welcome-hero">
                          <div class="welcome-hero-img">
                            <img
                              src="assets/images/banner1desk.png"
                              alt="slider image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="top-area">
          <div class="header-area">
            <div class="top-bar-message">
              {" "}
              Acompanhe as melhores promoções disponíveis aqui na Maeztra.
            </div>
            <nav
              class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
              data-minus-value-desktop="70"
              data-minus-value-mobile="55"
              data-speed="1000"
            >
              <div class="top-search">
                <div class="container">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="fa fa-search"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                    <span class="input-group-addon close-search">
                      <i class="fa fa-times"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div class="container">

                <div class="hm-foot-email header resDesktop">
                  <div class="foot-email-box ">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="O Que Você Busca?"
                      />
                      <div class="foot-email-subscribe">Buscar</div>
                    </div>
                </div>

                <div class="attr-nav">
                  <ul>
                    <li class="search resMobile">
                      <a href="#">
                        <span class="lnr lnr-magnifier"></span>
                      </a>
                    </li>
                    <li class="search resDesktop">
                      <a href="#">
                        <span class="lnr lnr-wishlist resDesktop"></span>
                        Minha Conta
                      </a>
                    </li>
                    <li class="search resDesktop">
                      <a href="#">
                        <span class="lnr lnr-minhaconta resDesktop"></span>
                        Minha Conta
                      </a>
                    </li>
                    <li class="dropdown">
                      <a
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <span class="lnr lnr-cart ">Meu carrinho</span>
                      </a>
                      <ul class="dropdown-menu cart-list s-cate">
                        <li class="single-cart-list">
                          <a href="#" class="photo">
                            <img
                              src="assets/images/arrivals1.png"
                              class="cart-thumb"
                              alt="image"
                            />
                          </a>
                          <div class="cart-list-txt">
                            <h6>
                              <a href="#">
                                arm <br /> chair
                              </a>
                            </h6>
                            <p>
                              1 x - <span class="price">$180.00</span>
                            </p>
                          </div>
                          <div class="cart-close">
                            <span class="lnr lnr-cross"></span>
                          </div>
                        </li>
                        <li class="single-cart-list">
                          <a href="#" class="photo">
                            <img
                              src="assets/images/arrivals2.png"
                              class="cart-thumb"
                              alt="image"
                            />
                          </a>
                          <div class="cart-list-txt">
                            <h6>
                              <a href="#">
                                single <br /> armchair
                              </a>
                            </h6>
                            <p>
                              1 x - <span class="price">$180.00</span>
                            </p>
                          </div>
                          <div class="cart-close">
                            <span class="lnr lnr-cross"></span>
                          </div>
                        </li>
                        <li class="single-cart-list">
                          <a href="#" class="photo">
                            <img
                              src="assets/images/arrivals3.png"
                              class="cart-thumb"
                              alt="image"
                            />
                          </a>
                          <div class="cart-list-txt">
                            <h6>
                              <a href="#">
                                wooden arn <br /> chair
                              </a>
                            </h6>
                            <p>
                              1 x - <span class="price">$180.00</span>
                            </p>
                          </div>
                          <div class="cart-close">
                            <span class="lnr lnr-cross"></span>
                          </div>
                        </li>
                        <li class="total">
                          <span>Total: $0.00</span>
                          <button
                            class="btn-cart pull-right"
                            onclick="window.location.href='#'"
                          >
                            view cart
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i class="fa fa-bars"></i>
                  </button>
                  <a class="navbar-brand" href="#">
                    <img src="assets/images/logomaez.png" />
                  </a>
                </div>
              </div>

              <div class="container resDesktop">
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i class="fa fa-bars"></i>
                  </button>
                </div>
                <div
                  class="collapse navbar-collapse menu-ui-design"
                  id="navbar-menu"
                >
                  <ul
                    class="nav navbar-nav navbar-center"
                    data-in="fadeInDown"
                    data-out="fadeOutUp"
                  >
                    <li class=" scroll active">
                      <a href="#novidades">Novidades</a>
                    </li>
                    <li class="scroll">
                      <a href="#vestidos">Vestidos</a>
                    </li>
                    <li class="scroll">
                      <a href="#roupas">Roupas</a>
                    </li>
                    <li class="scroll">
                      <a href="#sapatos">Sapatos</a>
                    </li>
                    <li class="scroll">
                      <a href="#lingerie">Lingerie</a>
                    </li>
                    <li class="scroll">
                      <a href="#acessorios">Acessórios</a>
                    </li>
                    <li class="scroll">
                      <a href="#outlet">OUTLET</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div class="clearfix"></div>
        </div>
      </header>
      <section id="benefits" class="benefits">
        <div class="container">
          <div class="section-header">
            <div class="title-benefits"> Por que comprar na Maeztra? </div>
          </div>
          <div class="feature-content">
            <div class="row">
              <div class="">
                <li class="benefits-item">
                  <img src="assets/images/world.png" />
                  <div>
                    Produtos importados
                    <br />
                    <span>Produtos de Alta Qualidade</span>
                  </div>
                </li>
              </div>
              <div class="">
                <li class="benefits-item">
                  <img src="assets/images/world.png" />
                  <div>
                    Produtos importados
                    <br />
                    <span>Produtos de Alta Qualidade</span>
                  </div>
                </li>
              </div>
              <div class="">
                <li class="benefits-item">
                  <img src="assets/images/world.png" />
                  <div>
                    Produtos importados
                    <br />
                    <span>Produtos de Alta Qualidade</span>
                  </div>
                </li>
              </div>
              <div class="">
                <li class="benefits-item">
                  <img src="assets/images/world.png" />
                  <div>
                    Produtos importados
                    <br />
                    <span>Produtos de Alta Qualidade</span>
                  </div>
                </li>
              </div>
              <div class="">
                <li class="benefits-item">
                  <img src="assets/images/world.png" />
                  <div>
                    Produtos importados
                    <br />
                    <span>Produtos de Alta Qualidade</span>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="partners">
        <div> Marcas Parceiras </div>
        <div class="container">
          <div class="feature-content">
            <div class="row">
              <div>
                <li>
                  <img src="assets/images/melissa.png" />
                </li>
              </div>
              <div>
                <li>
                  <img src="assets/images/zara.png" />
                </li>
              </div>
              <div>
                <li>
                  <img src="assets/images/forever21.png" />
                </li>
              </div>
              <div>
                <li>
                  <img src="assets/images/comma.png" />
                </li>
              </div>
              <div>
                <li>
                  <img src="assets/images/anntaylor.png" />
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sofa-collection">
        <div class="owl-carousel owl-theme" id="collection-carousel">
          <div class="sofa-collection collectionbg1">
            <div class="container">
              <div class="sofa-collection-txt">
                <h2>unlimited sofa collection</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div class="sofa-collection-price">
                  <h4>
                    strting from <span>$ 199</span>
                  </h4>
                </div>
                <button
                  class="btn-cart welcome-add-cart sofa-collection-btn"
                  onclick="window.location.href='#'"
                >
                  view more
                </button>
              </div>
            </div>
          </div>
          <div class="sofa-collection collectionbg2">
            <div class="container">
              <div class="sofa-collection-txt">
                <h2>unlimited dainning table collection</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div class="sofa-collection-price">
                  <h4>
                    strting from <span>$ 299</span>
                  </h4>
                </div>
                <button
                  class="btn-cart welcome-add-cart sofa-collection-btn"
                  onclick="window.location.href='#'"
                >
                  view more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="feature" class="feature">
        <div class="container">
          <div class="section-header">
            <h2>As Mais Pedidas</h2>
          </div>
          <div class="feature-content">
            <div class="row">
              <div class="col-sm-3">
                <div class="single-feature">
                  <img src="assets/images/product1.png" alt="feature image" />
                  <div class="single-feature-txt text-center">
                    <p>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <span class="spacial-feature-icon">
                        <i class="fa fa-star"></i>
                      </span>
                      <span class="feature-review">(45 review)</span>
                    </p>
                    <h3>
                      <a href="#">designed sofa</a>
                    </h3>
                    <h5>$160.00</h5>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="single-feature">
                  <img src="assets/images/product1.png" alt="feature image" />
                  <div class="single-feature-txt text-center">
                    <p>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <span class="spacial-feature-icon">
                        <i class="fa fa-star"></i>
                      </span>
                      <span class="feature-review">(45 review)</span>
                    </p>
                    <h3>
                      <a href="#">dinning table </a>
                    </h3>
                    <h5>$200.00</h5>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="single-feature">
                  <img src="assets/images/product1.png" alt="feature image" />
                  <div class="single-feature-txt text-center">
                    <p>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <span class="spacial-feature-icon">
                        <i class="fa fa-star"></i>
                      </span>
                      <span class="feature-review">(45 review)</span>
                    </p>
                    <h3>
                      <a href="#">chair and table</a>
                    </h3>
                    <h5>$100.00</h5>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="single-feature">
                  <img src="assets/images/product1.png" alt="feature image" />
                  <div class="single-feature-txt text-center">
                    <p>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <span class="spacial-feature-icon">
                        <i class="fa fa-star"></i>
                      </span>
                      <span class="feature-review">(45 review)</span>
                    </p>
                    <h3>
                      <a href="#">modern arm chair</a>
                    </h3>
                    <h5>$299.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog mobile" class="blog mobile">
        <div class="container">
          <div class="section-header">
            <h2>Lorem ipsum</h2>
          </div>
          <div class="blog-content">
            <div class="row">
              <div class="col-sm-4">
                <div class="single-blog">
                  <div class="single-blog-txt">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Interdum mauris posuere fusce proin mattis. Hendrerit cras
                      ut nunc enim dictum. Mattis proin ut quis donec sed eget
                      nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis
                      sed cursus condimentum velit pharetra. Amet luctus ut
                      vulputate scelerisque .{" "}
                    </p>
                  </div>
                  <div class="single-blog-img">
                    <img src="assets/images/blogpost.png" alt="blog image" />
                    <div class="single-blog-img-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog desktop" class="blog desktop">
        <div class="container">
          <div class="section-header">
            <div>
              <h2>Lorem ipsum</h2>
              <div class="single-blog-txt">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Interdum mauris posuere fusce proin mattis. Hendrerit cras ut
                  nunc enim dictum. Mattis proin ut quis donec sed eget nulla.
                  Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus
                  condimentum velit pharetra. Amet luctus ut vulputate
                  scelerisque .
                </p>
              </div>
            </div>
            <div class="single-blog-img">
              <img src="assets/images/blogpost.png" alt="blog image" />
              <div class="single-blog-img-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      <div class="newsletter">
        <div class="hm-footer-widget">
          <div class="hm-foot-title">
            <h4>Recebe Nossa Newsletter</h4>
          </div>
          <div class="hm-foot-email">
            <div class="foot-email-box">
              <input
                type="text"
                class="form-control"
                placeholder="Digite seu e-mail"
              />
              <div class="foot-email-subscribe">Enviar</div>
            </div>
          </div>
        </div>
      </div>
      
      <section id="" class="">
        <div class="container">
          <div class="hm-footer-details resMobile">
            <div class="row">
              <div class=" col-md-3 col-sm-6 col-xs-12">
                <div class="hm-footer-widget">
                  <div
                      class="hm-foot-title"
                      data-toggle="collapse"
                      href="#collapseInfo"
                    >
                    <div class="title-container">
                      <h4>Informações</h4>+
                    </div>
                  </div>
                  <div class="hm-foot-menu collapse" id="collapseInfo">
                    <ul>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class=" col-md-3 col-sm-6 col-xs-12">
                <div class="hm-footer-widget">
                <div
                      class="hm-foot-title"
                      data-toggle="collapse"
                      href="#collapseInfo2"
                    >
                    <div class="title-container">
                      <h4>Minha Conta</h4>+
                    </div>
                  </div>
                  <div class="hm-foot-menu collapse" id="collapseInfo2">
                    <ul>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class=" col-md-3 col-sm-6 col-xs-12">
                <div class="hm-footer-widget">
                <div
                      class="hm-foot-title"
                      data-toggle="collapse"
                      href="#collapseInfo3"
                    >
                      <div class="title-container">
                      <h4>Onde nos Encontrar</h4>+
                    </div>
                  </div>
                  <div class="hm-foot-menu collapse" id="collapseInfo3">
                    <ul>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="" class="">
        <div class="container">
          <div class="hm-footer-details resDesktop">
            <div class="row">
              <div>
                <div class="hm-footer-widget">
                  <div
                    class="hm-foot-title"
                    data-toggle="collapse"
                    href="#collapseInfo"
                  >
                    <div class="title-container">
                      <h4>Informações</h4>
                    </div>
                  </div>
                  <div class="hm-foot-menu ">
                    <ul>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div class="hm-footer-widget">
                  <div
                    class="hm-foot-title"
                    data-toggle="collapse"
                    href="#collapseInfo"
                  >
                    <div class="title-container">
                      <h4>Minha Conta</h4>
                    </div>
                  </div>
                  <div class="hm-foot-menu" id="collapseInfo">
                    <ul>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div class="hm-footer-widget">
                  <div
                    class="hm-foot-title"
                    data-toggle="collapse"
                    href="#collapseInfo"
                  >
                    <div class="title-container">
                      <h4>Onde nos Encontrar</h4>
                    </div>
                  </div>
                  <div class="hm-foot-menu" id="collapseInfo">
                    <ul>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="#">Lorem ipsum</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" class="footer ">
        <div class="container">
          <div class="hm-footer-copyright text-center">
            <div class="footer-social">
              <img class="logos resMobile" src="assets/images/payment.png" />
              <img class="logos resDesktop" src="assets/images/social-logo.png" />
              <img class="logos resDesktop" src="assets/images/payment-logos.png" />
              <div class="resMobile">
                <a href="https://vtex.com/br-pt/">
                <img src="assets/images/vtex-footer.png" />
              </a>
              <a href="https://maeztra.com/">
                <img src="assets/images/maeztra-footer.png" />
              </a></div>
              <a class="resDesktop" href="https://vtex.com/br-pt/">
                <img src="assets/images/vtex-footer.png" />
              </a>
              <a class="resDesktop" href="https://maeztra.com/">
                <img src="assets/images/maeztra-footer.png" />
              </a>
            </div>
          </div>
        </div>
        <div id="scroll-Top">
          <div class="return-to-top">
            <i
              class="fa fa-angle-up "
              id="scroll-top"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Back to Top"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
