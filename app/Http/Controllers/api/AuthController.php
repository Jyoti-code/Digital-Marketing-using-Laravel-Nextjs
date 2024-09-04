<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Exception;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
    
        try {
            if (!Auth::attempt($request->only('email', 'password'))) {
                return response()->json([
                    'status' => 401,
                    'message' => 'Unauthorized User',
                ], 401);
            }
    
            $user = Auth::user();
            $token = $user->createToken('user-login')->accessToken;
    
            return response()->json([
                'user' => $user,
                'token' => $token,
            ], 200);
    
        } catch (Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Internal Server Error',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    
    public function getLoginUser()
    {
        if (Auth::guard('api')->check()) {
            $user = Auth::guard('api')->user();
            $token = $user->createToken('user-login')->accessToken;
            return response()->json([
                'user' => $user,
                'token' =>$token,
            ], 200);
        }
        return response()->json([
            'message' => 'Unauthorized',
        ], 401);
    }

    public function getLogoutUser()
    {
        if (Auth::guard('api')->check()) {
            $accessToken = Auth::guard('api')->user()->token();

            \DB::table('oauth_refresh_tokens')
                ->where('access_token_id', $accessToken->id)
                ->update(['revoked' => true]);
            $accessToken->revoke();
            return response()->json([
                'message' => 'Successfully logged out',
            ], 200);
        }
        return response()->json([
            'message' => 'Not logged out',
        ], 401);
    }
}
