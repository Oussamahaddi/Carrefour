<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderProduct;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $orders = Order::with('orderProduct')->get();
        return response($orders);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        Order::create([
            'total_price_order' => $request->total_price_order,
            'user_id' => (int)$request->user_id
        ]);

        $orderId = Order::latest()->first()->id;

        foreach($request->fields as $field) {
            OrderProduct::create([
                'product_id' => $field['product_id'],
                'order_id' => $orderId,
                'qte' => $field['product_qte'],
            ]);
        }

        $cart = Cart::where('user_id', $request->user_id)->delete();

        return response('order created');
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
    public function update(Request $request, string $id)
    {
        //
        $order = Order::find($id);
        
        // $order->update([
        //     'status' => '',
        //     'sendingDate' => $request->sendingDate
        // ]);
        $order->status = $request->status;
        $order->sendingDate = $request->sendingDate;
        $order->update();
        return response($order);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
