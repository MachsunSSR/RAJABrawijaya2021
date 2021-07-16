<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Login Pengurus - RAJA Brawijaya 2020</title>

    <!-- General CSS Files -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <!-- Template CSS -->
    <link rel="stylesheet" href="{{asset('assets/superteam/css/style.css')}}">
    <link rel="stylesheet" href="{{asset('assets/superteam/css/components.css')}}">
</head>

<body>
    <div id="app">
        <section class="section">
            <div class="d-flex flex-wrap align-items-stretch">
                <div class="col-lg-4 col-md-6 col-12 order-lg-1 min-vh-100 order-2 bg-white">
                    <div class="p-4 m-3">
                        <img src="{{asset('assets/superteam/img/auth/logo.png')}}" alt="logo" width="80" class="mb-5 mt-2">
                        <h4 class="text-dark font-weight-normal">Autentikasi <span class="font-weight-bold">RAJA
                                Brawijaya</span></h4>
                        <p class="text-muted">Silahan masuk menggunakan NIM & Password yang biasa dipakai untuk Login ke
                            Layanan BAIS UB / SIAM UB.</p>
                        <form class="needs-validation" novalidate="" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="nim">NIM</label>
                                <input id="nim" type="text" class="form-control" name="nim" id="nim" tabindex="1"
                                    required autofocus>
                            </div>
                            <div class="form-group">
                                <div class="d-block">
                                    <label for="password" class="control-label">Password</label>
                                </div>
                                <input id="password" type="password" class="form-control" name="password" id="password"
                                    tabindex="2" required>
                            </div>

                            <div class="form-group text-right">
                                <button type="submit" class="btn btn-primary btn-lg btn-icon icon-right" tabindex="4">
                                    Masuk
                                </button>
                            </div>
                            <div class="text-center mt-5 text-small">
                                Developed with 💙 by PIT RAJA Brawijaya 2020
                            </div>
                    </div>
                </div>
                <div class="col-lg-8 col-12 order-lg-2 d-none d-lg-block position-relative overlay-gradient-bottom"
                    data-background="{{asset('assets/superteam/img/auth/bg.jpg')}}" style="min-height:101vh">
                    <div class="absolute-bottom-left index-2">
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- General JS Scripts -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="{{asset('superteam/js/stisla.js')}}"></script>

    <!-- JS Libraies -->

    <!-- Template JS File -->
    <script src="{{asset('assets/superteam/js/scripts.js')}}"></script>
    <script src="{{asset('assets/superteam/js/custom.js')}}"></script>
    
    <!-- Alert -->
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
