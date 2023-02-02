<?php

use App\Http\Controllers\AuthController;
// use App\Http\Controllers\ClientController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth-route')->group(function() {
    // Route::post('register', [AuthController::class, 'register']);

    Route::middleware('auth:sanctum')->group(function() {
        Route::patch('profile', [AuthController::class, 'updateProfile']);
        Route::post('who-am-i', [AuthController::class, 'whoAmI']);
        Route::post('logout', [AuthController::class, 'logout']);
    });

    Route::middleware(['auth:sanctum'])->group(function() {
        Route::post('image', [ImageController::class, 'store']);


        // Route::post('clients/multi-delete', [ClientController::class, 'deleteMulti']);
        // Route::apiResource('clients', ClientController::class)->only([
        //     'store', 'destroy', 'update'
        // ]);

    });

});

Route::post('login', [AuthController::class, 'login']);
// Route::apiResource('clients', ClientController::class)->only(['index', 'show']);

Route::get('/version', function() {
    return '0.1';
});
