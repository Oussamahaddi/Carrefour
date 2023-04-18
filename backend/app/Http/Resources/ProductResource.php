<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'product_name' => $this->name,
            'reference' => $this->reference,
            'libelle' => $this->libelle,
            'codeBare' => $this->codeBare,
            'prixAchat' => $this->prixAchat,
            'prixFinal' => $this->prixFinal,
            'prixOffre' => $this->prixOffre,
            'description' => $this->description,
            'category_id' => $this->category_id,
            'image_url' => $this->image ? url($this->image) : null,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
