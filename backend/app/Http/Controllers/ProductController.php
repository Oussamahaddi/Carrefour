<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // $products = Product::all();
        $products = Product::with('category')->get();
        return response($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        //
        $validation = $request->validated();
        $product = Product::create($validation);
        return response()->json(['message' => 'Product Created successfuly']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // search by name of product 
        $products = Product::with('category')->find($id);
        return response($products);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, Product $product)
    {
        //
        $validation = $request->validated();
        $product->update($validation);
        return response($request);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $product = Product::find($id);
        $product->delete();
        return response('deleted');
    }
}
