<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Raport Penilaian RAJA Brawijaya</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <style>
        @import url(https://fonts.googleapis.com/css?family=Roboto:300);

        .login-page {
            width: 360px;
            padding: auto;
            margin: auto;
        }

        .form {
            position: relative;
            z-index: 1;
            background: #FFFFFF;
            max-width: 360px;
            margin: 0 auto 100px;
            padding: 45px;
            text-align: center;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
        }

        .form input {
            font-family: "Roboto", sans-serif;
            outline: 0;
            background: #f2f2f2;
            width: 100%;
            border: 0;
            margin: 0 0 15px;
            padding: 15px;
            box-sizing: border-box;
            font-size: 14px;
        }

        .form button {
            font-family: "Roboto", sans-serif;
            text-transform: uppercase;
            outline: 0;
            background: #4CAF50;
            width: 100%;
            border: 0;
            padding: 15px;
            color: #FFFFFF;
            font-size: 14px;
            -webkit-transition: all 0.3 ease;
            transition: all 0.3 ease;
            cursor: pointer;
        }

        .form button:hover,
        .form button:active,
        .form button:focus {
            background: #43A047;
        }

        .form .message {
            margin: 15px 0 0;
            color: #b3b3b3;
            font-size: 12px;
        }

        .form .alert {
            margin: 0 0 0 0;
            color: #FF0000;
            font-size: 12px;
        }

        .form .message a {
            color: #4CAF50;
            text-decoration: none;
        }

        .form .register-form {
            display: none;
        }

        .container {
            position: relative;
            z-index: 1;
            max-width: 300px;
            margin: 0 auto;
        }

        .container:before,
        .container:after {
            content: "";
            display: block;
            clear: both;
        }

        .container .info {
            margin: 50px auto;
            text-align: center;
        }

        .container .info h1 {
            margin: 0 0 15px;
            padding: 0;
            font-size: 36px;
            font-weight: 300;
            color: #1a1a1a;
        }

        .container .info span {
            color: #4d4d4d;
            font-size: 12px;
        }

        .container .info span a {
            color: #000000;
            text-decoration: none;
        }

        .container .info span .fa {
            color: #EF3B3A;
        }

        body {
            background: #76b852;
            /* fallback for old browsers */
            background: -webkit-linear-gradient(right, #76b852, #8DC26F);
            background: -moz-linear-gradient(right, #76b852, #8DC26F);
            background: -o-linear-gradient(right, #76b852, #8DC26F);
            background: linear-gradient(to left, #76b852, #8DC26F);
            font-family: "Roboto", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .judul {
            padding-top: 10%;
            color: #FFFFFF;
            text-shadow: 1px 1px 3px #000000;
        }

        .judul>h1 {
            font-size: 7vw;
        }

        .judul>h3 {
            font-size: 6vw;
        }

        @media only screen and (min-width: 768px) {
            .judul {
                padding-top: 2%;
                padding-bottom: 5%;
                color: #FFFFFF;
                text-shadow: 1px 1px 5px #000000;
            }

            .judul>h1 {
                font-size: 4vw;
            }

            .judul>h3 {
                font-size: 3vw;
            }
        }
    </style>

    @if(Session::has('raport_file'))
    <meta http-equiv="refresh" content="1;url={{ Session::get('raport_file') }}">
    @endif
</head>

<body>
    <div id="regular" style="display: block">
        <div class="judul text-center">
            <h1 style="margin-bottom:0px">Unduh Raport Penilaian</h1>
            <h3 style="margin-top:0px;">RAJA Brawijaya 2021</h3>
        </div>

        <div class="login-page" id="log">
            <div class="form">
                <form method="POST" class="login-form">
                    @csrf
                    <input type="text" class="form-control" id="nim" name="nim" placeholder="NIM" autocomplete="on" required />
                    <input type="password" class="form-control" id="password" name="password" placeholder="password" autocomplete="on" required />
                    <button id="after" type="submit">unduh raport</button>
                    <p class="message">More info? <a href="#" id="info">Click Me</a></p>
                    @if ($isError == 1)
                        <p class="alert">NIM atau Password Salah!</p>
                        <script> err = "1"; </script>
                    @elseif ($isError == 2)
                        <p class="alert">Hanya angkatan 2021 yang dapat cetak raport</p>
                        <script> err = "2"; </script>

                    @endif
                </form>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.slim.js" integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY=" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

    <script>
        info.addEventListener("click", function () {
            swal("", "Nilai yang keluar merupakan hasil penilaian ketika kamu mengikuti RAJA Brawijaya 2021. Apabila terdapat kendala atau pertanyaan mengenai raport RAJA Brawijaya 2021 silahkan hubungi : +62 812-4949-1019 (Machsun)",
                "info");
        });
    </script>

    <script>
        $(" #after ").mouseup(function() {
            alert("Anda akan mendownload file raport.");
        })
    </script>
</body>

</html>
