<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <title>Superteam Apps - RAJA Brawijaya 2020</title>
    <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <script src="https://kit.fontawesome.com/11f841f55d.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <!-- Google Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
    <!-- Bootstrap core CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://rajabrawijaya.ub.ac.id/assets/apps/css/style.css">
</head>

<body>
    <div class="fixed-bottom px-5 py-4 d-inline-flex">
        <a href="{{ url('superteam/logout') }}">
            <div class="messages my-2 mx-1">
                <img class="logo-center" src="{{asset('assets/superteam/img/dashboard/logout.svg')}}" alt="" width="50px">
            </div>
        </a>
    </div>
    <div class="jumbotron jumbotron-fluid mb-n5">
        <div class="container text-center text-white">
            <h1 class="display-4 font-weight-bold">SUPERTEAM APPS</h1>
            <p class="lead">RAJA Brawijaya 2020</p>
        </div>
    </div>
    <div class="container-fluid pr-5 pl-5 pt-5 pb-2">
        <div class="row mt-n5">
            <div class="col-12 col-md-4 col-lg-3">
                <a href="{{ url('superteam/access') }}">
                    <div class="card text-white bg-transparent mb-3 border-0 rounded-xl">
                        <div class="card-img-top card-custom p-3"
                            style="background-image: url('{{asset('assets/superteam/img/dashboard/0.jpg')}}');">
                        </div>
                        <div class="card-body rgba-pink-strong">
                            <h6 class="card-title mt-n1 font-weight-bolder h5">Acess Management</h6>
                            <p class="small my-n2">Setup access for every user</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-12 col-md-4 col-lg-3">
                <a href="{{ url('superteam/publication') }}">
                    <div class="card text-white bg-transparent mb-3 border-0 rounded-lg">
                        <div class="card-img-top card-custom p-3"
                            style="background-image: url('{{asset('assets/superteam/img/dashboard/1.jpg')}}');">
                        </div>
                        <div class="card-body rgba-orange-strong">
                            <h6 class="card-title mt-n1 font-weight-bolder h5">Publication Center</h6>
                            <p class="small my-n2">Manage content like news, FAQ, and shortlink</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-12 col-md-4 col-lg-3">
                <a href="{{ url('superteam/publication/cc') }}">
                    <div class="card text-white bg-transparent mb-3 border-0 rounded-lg">
                        <div class="card-img-top card-custom p-3"
                            style="background-image: url('{{asset('assets/superteam/img/dashboard/3.jpg')}}');">
                        </div>
                        <div class="card-body rgba-pink-strong ">
                            <h6 class="card-title mt-n1 font-weight-bolder h5">Crisis Center</h6>
                            <p class="small my-n2">Manage attendance and leave</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-12 col-md-4 col-lg-3">
                <a href="{{ url('superteam/ukm') }}">
                    <div class="card text-white bg-transparent mb-3 border-0 rounded-lg">
                        <div class="card-img-top card-custom p-3"
                            style="background-image: url('{{asset('assets/superteam/img/dashboard/5.jpg')}}');">
                        </div>
                        <div class="card-body rgba-orange-strong">
                            <h6 class="card-title mt-n1 font-weight-bolder h5">UKM Center</h6>
                            <p class="small my-n2">Are you UKM Staff ? Access here to manage your UKM data</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <footer class="small text-center pb-2 mb-2 grey-text">Developed with 💙 by PIT RAJA Brawijaya 2020</footer>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://rajabrawijaya.ub.ac.id/assets/layout/js/script.js" defer></script>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>

    @if (session('success_message'))
    <script type="text/javascript">
        Swal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: '{{session('success_message') }}'
        })

    </script>
    @elseif (session('failed_message'))
    <script type="text/javascript">
        Swal.fire({
            icon: 'error',
            title: 'Gagal!',
            text: '{{ session('failed_message') }}'
        })

    </script>
    @endif
</body>

</html>
