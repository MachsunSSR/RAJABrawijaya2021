@extends('layout.admin')
@section('title', 'Ubah Akses')
@section('content')
<form method="POST" action="{{ url('superteam/access/'.$mahasiswa->nim) }}">
@method("PUT")
@csrf
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-body">
                    <div class="form-group">
                        <label>NIM</label>
                        <input type="text" name="nim" class="form-control" value="{{ $mahasiswa->nim }}" required>
                    </div>
                    <div class="form-group">
                        <label for="legalitas">Akses</label>
                        <div class="form-group">
                            @foreach($accesses as $access)
                            <label class="selectgroup-item">
                                <input type="checkbox" name="access[]" id="access_{{ $access->id }}" value="{{ $access->id }}"
                                    class="selectgroup-input"
                                    @foreach ($mahasiswa->accesses as $accessMahasiswa)
                                        @if ($accessMahasiswa->id == $access->id) checked @endif
                                    @endforeach>
                                <span class="selectgroup-button" for="access_{{ $access->id }}">{{ $access->access }}</span>
                            </label>
                            @endforeach
                        </div>
                    </div>
                </div>
                <div class="card-footer text-right">
                    <button class="btn btn-primary">Simpan</button>
                </div>
            </div>
        </div>
    </div>
</form>
@endsection
