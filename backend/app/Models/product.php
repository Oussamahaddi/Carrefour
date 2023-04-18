<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable =  [
            'product_name',
            'reference',
            'libelle',
            'codeBare',
            'prixAchat',
            'prixFinal',
            'prixOffre',
            'description',
            'category_id',
            'product_image',
        ];
    public function category() {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
