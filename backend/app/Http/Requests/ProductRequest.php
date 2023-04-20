<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'product_name' => 'required|string',
            'reference' => 'required|string',
            'libelle' => 'required|string',
            'codeBare' => ['required', 'string'],
            'prixAchat' => 'required|string',
            'prixFinal' => 'required|string',
            'prixOffre' => 'required|string',
            'description' => 'required|string',
            'category_id' => 'required',
            'product_image' => 'required|string',
            'product_quantite' => 'required',
        ];
    }
}
