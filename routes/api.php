<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
});

Route::controller(AuthController::class)->group(function () {
    Route::get('user', 'getLoginUser');
    Route::get('logout', 'getLogoutUser');
})->middleware('auth:api');

Route::controller(UserController::class)->group(function () {
    Route::post('category', 'category');
    Route::post('banner', 'banner');
    Route::post('aboutStore', 'aboutStore');
    Route::post('servicesStore', 'servicesStore');
    Route::post('testimonialStore', 'testimonialStore');
    Route::post('productStore', 'productStore');
    Route::post('categoryUpdate', 'categoryUpdate');
    Route::post('bannerUpdate', 'bannerUpdate');
    Route::post('aboutUpdate', 'aboutUpdate');
    Route::post('serviceUpdate', 'serviceUpdate');
    Route::post('testimonialUpdate', 'testimonialUpdate');
    Route::post('productUpdate', 'productUpdate');
    Route::get('categoryList', 'categoryList');
    Route::get('productList', 'productList');
    Route::get('servicesList', 'servicesList');
    Route::get('aboutList', 'aboutList');
    Route::get('testimonialList', 'testimonialList');
    Route::get('bannerList', 'bannerList');
    Route::get('categoryEdit/{id}', 'categoryEdit');
    Route::get('productEdit/{id}', 'productEdit');
    Route::get('bannerEdit/{id}', 'bannerEdit');
    Route::get('aboutEdit/{id}', 'aboutEdit');
    Route::get('testimonialEdit/{id}', 'testimonialEdit');
    Route::get('serviceEdit/{id}', 'serviceEdit');
    Route::post('deleteTestimonial/{id}', 'deleteTestimonial');
    Route::post('deleteProduct/{id}', 'deleteProduct');
    Route::post('deleteServices/{id}', 'deleteServices');
    Route::post('deleteAbout/{id}', 'deleteAbout');
    Route::post('deleteBanner/{id}', 'deleteBanner');
    Route::post('deleteCategory/{id}', 'deleteCategory');
});
