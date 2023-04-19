<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryResource;
use Illuminate\Auth\Events\Validated;
use Symfony\Contracts\Service\Attribute\Required;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $postPerPage = 8;
        $category = Category::paginate($postPerPage);
        $allCategory = Category::all();
        return response()->json([
            'categories' => $category, 
            'allCategory' => $allCategory,
            'page_count' => ceil(count(Category::all()) / $postPerPage)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        //
        // $field = $request->validate([
        //     'categorie_name' => 'required|string|max:255',
        //     'description' => 'required|string',
        //     'categorie_image' => 'required|string',
        // ]);
        $validation = $request->Validated();
        Category::create($validation);
        return response()->json(['message' => 'created']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoryRequest $request, Category $category)
    {
        //
        $validation = $request->validated();
        $category->update($validation);
        return new CategoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $category = Category::find($id);
        $category->delete();
        return response('deleted');
    }
}
