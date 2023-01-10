<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Traktor extends Model
{
    use HasFactory;
    
    protected $fillable =[
        'neve',
        'sulya',
        'fajtaja',
        'szine'

    ];
}
