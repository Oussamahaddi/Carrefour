<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\LoginController;
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


// protected route
// Route::group(['middleware' => ['auth:sanctum']], function (Request $request) {
//     Route::get('/logout', [LoginController::class, 'logout']);
// });


