<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Core\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\ProfileRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller {
    public function updateProfile(ProfileRequest $request) {
        $data = $request->safe()->only(['currentPassword', 'email', 'password' ]);
        $user = $request->user();

        if (!Hash::check($data['currentPassword'], $user->password)) {
            return response()->json(['errors' => ['email' => 'Invalid Current Password']], 400);
        }

        if (array_key_exists('email', $data)  && $data['email']) {
            $user->email = $data['email'];
            $user->save();
        }
        if (array_key_exists('password', $data)  &&$data['password']) {
            $user->password = Hash::make($data['password']);
            $user->save();
        }

        return $user;
    }

    // public function register(RegisterRequest $request) {
    //     $data = $request->safe()->only(['name', 'email', 'password' ]);
    //     $data['password'] = Hash::make($data['password']);

    //     $user = User::create($data);

    //     $token = $user->createToken('auth_token')->plainTextToken;

    //     return response()
    //         ->json(['data' => $user,'token' => $token, 'token_type' => 'Bearer', ]);
    // }

    public function login(LoginRequest $request) {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['errors' => ['email' => 'Invalid credential']], 400);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()
            ->json(['data' => $user, 'token' => $token, 'token_type' => 'Bearer', ]);
    }

    public function logout() {
        // Auth::logout();
        auth()->user()->tokens()->delete();

        return [
            'message' => 'You have successfully logged out and the token was successfully deleted'
        ];
    }

    public function whoAmI(Request $request) {
        return response()->json(['data' => $request->user()]);
    }
}
