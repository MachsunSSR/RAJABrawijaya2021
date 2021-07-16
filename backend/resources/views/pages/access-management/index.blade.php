@extends('layout.admin')
@section('title', 'Data Akses')
@section('content')
<a href="{{ url('superteam/access/create') }}" class="btn btn-primary btn-sm" style="position:absolute;right:0">Tambah Akses</a>
<div class="row pt-5">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-body">
                <table class="userTable">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">NIM</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Fakultas</th>
                            <th scope="col">Akses</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($mahasiswas as $key => $mahasiswa)
                        <tr>
                            <td>
                                {{ $key+1 }}
                            </td>
                            <td>
                                {{ $mahasiswa->nim }}
                            </td>
                            <td>
                                {{ $mahasiswa->nama ? $mahasiswa->nama : 'Belum Terdaftar' }}
                            </td>
                            <td>
                                {{ $mahasiswa->fakultas ? $mahasiswa->fakultas : 'Belum Terdaftar' }}
                            </td>
                            <td>
                                @foreach($mahasiswa->accesses as $access)
                                    {{ $access->access }} 
                                @endforeach
                            </td>
                            <td>
                                <a href="{{ url('superteam/access/'.$mahasiswa->nim.'/edit') }}" class="btn btn-primary d-inline">Ubah</a>
                                <form method="POST" action="{{ url('superteam/access/'.$mahasiswa->nim)}}"
                                    class="d-inline">
                                    @method('DELETE')
                                    @csrf
                                    <button class="btn btn-danger btn-sm">Hapus</button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection
@section('js')
<script>
    $(document).ready(function () {
        $('.userTable').DataTable();
    });
</script>
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
@endsection
