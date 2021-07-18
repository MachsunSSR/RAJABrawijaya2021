<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('assets/raport/style.css') }}">
    <script src="https://kit.fontawesome.com/c2b9b7aca3.js"></script>
    <title>Raport Penilaian RAJA Brawijaya</title>

    @if(Session::has('raport_file'))
        <meta http-equiv="refresh" content="1;url={{ Session::get('raport_file') }}">
    @endif
</head>

<body>
    <div class="container-fluid edit-twibbon"
        style="min-height:100vh;background-image: url('{{asset('assets/raport/bg.svg')}}');">
        <div class="judul text-center">
            <h1 style="font-size: 50px; margin-bottom:0px">Unduh Raport Penilaian</h1>
            <h3 style="font-size:35px;margin-top:0px;">RAJA Brawijaya 2020</h3>
        </div>
        <div role="alert" class="alert alert-warning mb-4">
            <div data-v-28a36be6="" class="heading-2"><svg data-v-28a36be6="" class="svg-inline--fa fa-info fa-w-6 mr-1"
                    aria-hidden="true" style="width: 30px; height: 30px; display: inline-block; padding: 0.25rem;"
                    focusable="false" data-prefix="fa" data-icon="info" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192 512" data-fa-i2svg="">
                    <path fill="currentColor"
                        d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z">
                    </path>
                </svg>
                <span data-v-28a36be6="">Informasi</span></div>
            <ol data-v-28a36be6="" class="p-0 pl-4">
                <li data-v-28a36be6=""><strong data-v-28a36be6="">Nilai yang keluar merupakan hasil penilaian ketika kamu mengikuti RAJA Brawijaya 2020.</strong></li>
                <li data-v-28a36be6="">Apabila terdapat kendala atau pertanyaan raport RAJA Brawijaya 2020 silahkan hubungi : <strong>+6283856901707 (Firhan)</strong></li>
            </ol>
        </div>
        <form method="POST">
            @csrf
            <div class="card shadow" style="border-radius: 5px;padding: 20px;margin-bottom: 10px;">
                <div class="card-body">
                    <div class="form-group">
                        <label for="nim">NIM</label>
                        <input type="text" class="form-control" name="nim">
                    </div>
                    <div class="form-group">
                        <label for="angkatan">Angkatan</label>
                        <select class="form-control" name="angkatan">
                            <!-- <option value="2019">2019</option> -->
                            <option value="2020">2020</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-success w-100">Unduh Raport</button>
                </div>
            </div>
        </form>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>
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
            text: '{{session('failed_message') }}'
        })
    </script>
    @endif
</body>

</html>
