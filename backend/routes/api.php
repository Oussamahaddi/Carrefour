<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// this route of sanctum authentication
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// product resource api that handle the CRUD methods
Route::resource('products', ProductController::class);

// category resource api that handle the CRUD methods
Route::resource('category', CategoryController::class);

// category resource api that handle the CRUD methods
Route::resource('cart', CartController::class);







// protected route
// Route::group(['middleware' => ['auth:sanctum']], function (Request $request) {
//     Route::get('/logout', [LoginController::class, 'logout']);
// });


