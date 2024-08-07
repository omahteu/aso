<?php
session_start(); // Iniciar a sessão

if (!isset($_SESSION['user_id'])) {
    // Se o usuário não estiver logado, redirecionar para a página de login
    header("Location: ../../index.html");
    exit();
}

// O usuário está logado, continuar com a lógica da página
?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Gestor ASO</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="../../css/feather.css">
  <link rel="stylesheet" href="../../css/themify-icons.css">
  <link rel="stylesheet" href="../../css/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- Plugin css for this page -->
  <link rel="stylesheet" href="../../css/dataTables.bootstrap4.css">
  <link rel="stylesheet" type="text/css" href="../../js/select.dataTables.min.css">
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="../../css/vertical-layout-light/style.css">
  <!-- endinject -->
  <link rel="shortcut icon" href="" />
</head>

<body>
  <div class="container-scroller">
    <!-- partial:partials/_navbar.html -->
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a class="navbar-brand brand-logo mr-5" href="../../index.html"><img src="../../images/logo.png" class="mr-2"
            alt="logo" /></a>
        <a class="navbar-brand brand-logo-mini" href="../../index.html"><img src="../../images/logo.png" alt="logo" /></a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span class="icon-menu"></span>
        </button>
        <ul class="navbar-nav mr-lg-2">
          <li class="nav-item nav-search d-none d-lg-block">
            <div class="input-group">
              <div class="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span class="input-group-text" id="search">
                  <i class="icon-search"></i>
                </span>
              </div>
              <input type="text" class="form-control" id="navbar-search-input" placeholder="Buscar..."
                aria-label="search" aria-describedby="search">
            </div>
          </li>
        </ul>
        <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item nav-profile dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
              <img src="../../images/dashboard/user.png" alt="profile" />
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a class="dropdown-item">
                <i class="ti-settings text-primary"></i>
                Settings
              </a>
              <a class="dropdown-item">
                <i class="ti-power-off text-primary"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
          data-toggle="offcanvas">
          <span class="icon-menu"></span>
        </button>
      </div>
    </nav>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial -->
      <!-- partial:partials/_sidebar.html -->
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="../samples/dash.html">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>

          <!-- ASO -->
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <i class="icon-bar-graph menu-icon"></i>
              <span class="menu-title">ASO</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="charts">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="../forms/emitir.html">Emitir</a></li>
              </ul>
            </div>
          </li>
          <!--  -->

          <!-- CADASTRO -->
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="icon-layout menu-icon"></i>
              <span class="menu-title">Cadastro</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="../forms/credenciadas.html">E. Credenciadas</a>
                </li>
                <li class="nav-item"> <a class="nav-link" href="../forms/empresas.html">Empresas</a></li>
                <li class="nav-item"> <a class="nav-link" href="../forms/exames.html">Exames</a></li>
                <li class="nav-item"> <a class="nav-link" href="../forms/funcoes.html">Funções</a></li>
                <li class="nav-item"> <a class="nav-link" href="../forms/precos.html">Preços</a></li>
                <li class="nav-item"> <a class="nav-link" href="../forms/unidades.html">Unidades</a></li>
                <li class="nav-item"> <a class="nav-link" href="../forms/usuarios.html">Usuários</a></li>
              </ul>
            </div>
          </li>
          <!--  -->

          <!-- CONFIGURAÇÕES -->
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#configuracoes" aria-expanded="false"
              aria-controls="configuracoes">
              <i class="icon-contract menu-icon"></i>
              <span class="menu-title">Configurações</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="configuracoes">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="../forms/email.html">Email</a></li>
                <li class="nav-item"> <a class="nav-link" href="../forms/edit-exames.html">Exames</a></li>
              </ul>
            </div>
          </li>
          <!--  -->

          <!-- RELATÒRIOS -->
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false"
              aria-controls="form-elements">
              <i class="icon-columns menu-icon"></i>
              <span class="menu-title">Relatórios</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="form-elements">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="../tables/asos.html">Asos</a></li>
                <li class="nav-item"> <a class="nav-link" href="../tables/credenciadas.html">E. Credenciadas</a>
                </li>
                <li class="nav-item"> <a class="nav-link" href="../tables/empresas.html">Empresas</a></li>
                <li class="nav-item"> <a class="nav-link" href="../tables/exames.html">Exames</a></li>
                <li class="nav-item"> <a class="nav-link" href="../tables/funcoes.html">Funções</a></li>
                <li class="nav-item"> <a class="nav-link" href="../tables/precos.html">Preços</a></li>
                <li class="nav-item"> <a class="nav-link" href="../tables/unidades.html">Unidades</a></li>
                <li class="nav-item"> <a class="nav-link" href="../tables/usuarios.html">Usuários</a></li>
              </ul>
            </div>
          </li>
          <!--  -->
        </ul>
      </nav>
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-md-12 grid-margin">
              <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 class="font-weight-bold">Bem-vindo Verde!</h3>
                  <h6 class="font-weight-normal mb-0">Você não possui nenhuma notificação</h6>
                </div>
              </div>
            </div>
          </div>

          <!--  -->
          <div class="row">
            <div class="col-md-5 grid-margin stretch-card">
              <div class="card resumototal">
                <div class="row">
                  <div class="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                    <div class="card card-inverse-primary">
                      <div class="card-body">
                        <p class="mb-4">Asos emitidos no mês</p>
                        <p class="fs-30 mb-2" id="asos-mes">0</p>
                        <!-- <p>2.00% (30 days)</p> -->
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 stretch-card transparent">
                    <div class="card card-inverse-success">
                      <div class="card-body">
                        <p class="mb-4">Asos faturadas</p>
                        <p class="fs-30 mb-2">R$ <span id="total_asos_mes">0</span></p>
                        <!-- <p>0.22% (30 days)</p> -->
                      </div>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
          <!--  -->
        </div>



          <!-- content-wrapper ends -->
          <!-- partial:partials/_footer.html -->
          <footer class="footer">
            <div class="d-sm-flex justify-content-center justify-content-sm-between">
              <span class="text-muted text-center text-sm-left d-block d-sm-inline-block"></span>
              <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"></span>
            </div>
            <!-- <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Distributed by <a href="#" target="_blank">Themewagon</a></span>
          </div> -->
          </footer>
          <!-- partial -->
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- plugins:js -->
    <script src="../../js/vendor.bundle.base.js"></script>
    <!-- endinject -->
    <!-- Plugin js for this page -->
    <script src="../../js/Chart.min.js"></script>
    <script src="../../js/jquery.dataTables.js"></script>
    <script src="../../js/dataTables.bootstrap4.js"></script>
    <script src="../../js/dataTables.select.min.js"></script>

    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="../../js/off-canvas.js"></script>
    <script src="../../js/hoverable-collapse.js"></script>
    <script src="../../js/template.js"></script>
    <script src="../../js/settings.js"></script>
    <script src="../../js/todolist.js"></script>
    <!-- endinject -->
    <!-- Custom js for this page-->
    <script src="../../js/dashboard.js"></script>
    <script src="../../js/Chart.roundedBarCharts.js"></script>
    <!-- End custom js for this page-->

    <script type="module" src="../../js/utils/asos-mes.js"></script>
    <script type="module" src="../../js/utils/resumo_asos.js"></script>
</body>

</html>