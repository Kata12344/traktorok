<?php

namespace App\Http\Controllers;

use App\Models\Traktor;
use Illuminate\Http\Request;

class TraktorController extends Controller
{
    public function index(){
        $traktors =  Traktor::all();
        return $traktors;
    }

    public function show ($neve, $sulya, $fajtaja, $szine)
    {
        $traktor = Traktor::where('neve', $neve)->where('sulya', $sulya)->where('fajtaja', $fajtaja)->where('szine', $szine)->get();
        return $traktor[0];
    }

    public function store(Request $request)
    {
        $traktor = new Traktor();
        $traktor->neve = $request->neve;
        $traktor->sulya = $request->sulya;
        $traktor->fajtaja = $request->fajtaja;
        $traktor->szine = $request->szine;
        $traktor->save();
    }

    public function destroy($id)
    {
        Traktor::find($id)->delete();
    }

    public function update(Request $request, $id)
    {
        $traktor = Traktor::find($id);
        $traktor->neve = $request->neve;
        $traktor->sulya = $request->sulya;
        $traktor->fajtaja = $request->fajtaja;
        $traktor->szine = $request->szine;
    }
}
