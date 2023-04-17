<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    //
    public function login(Request $request) {
        $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);

        // check email if exist on user
        $user = User::where('email' , $request->email)->first();

        // check if there is no user and password not match
        if (!$user || !Hash::check($request->password, $user->password)) {
            // check for email on admin 
            $Admin = Admin::where('email', $request->email)->first();
            // check if there no admin and password dosent match then there no user no admin
            if (!$Admin || $Admin->password != $request->password) {
                return response(['message' => 'unvalide email or password', 'error' => true]);
            } else {
                // create a token
                $token = $Admin->createToken('AdminToken')->plainTextToken;
                return response(['role' => 1, 'token' => $token], 200);
            }
        } else {
            $token = $user->createToken('myapptoken')->plainTextToken;
            $response = [
                'role' => 0,
                'token' => $token
            ];
            return response($response, 200);
        }
    }
}
