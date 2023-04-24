<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\CartRequest;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $cart = Cart::all();
        return response($cart);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Cart $cart)
    {
        //
        $check = $cart->all()->where('product_id', $request->product_id)->first();
        if ($check) {
            $check->update([
                'product_qte' => $check->product_qte + (int)$request->product_qte,
            ]);
        } else {
            Cart::create([
                'product_id' => (int)$request->product_id,
                'product_qte' => (int)$request->product_qte,
                'user_id' => (int)$request->user_id,
            ]);
        }
        return response('Add to cart successfuly');
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        //
        $cart = DB::table('carts')
                            ->select('carts.*', 'products.product_name', 'products.product_image', 'products.prixAchat')
                            ->join('users', 'carts.user_id' , '=', 'users.id')
                            ->join('products', 'carts.product_id', '=', 'products.id')
                            ->where('users.id', '=', (int)$id)
                            ->get();
        return response($cart);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $cart = Cart::find($id);
        $cart->delete();
        return response('item deleted');
    }
}
