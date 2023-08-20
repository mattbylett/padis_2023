<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Controllers
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\XeroController;
use App\Http\Controllers\API\WebsiteWorldController;
use App\Http\Controllers\API\AuthenticationController;

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

// Route::post('/updateProduct', 'API/ProductController@updateProduct');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('connect', [AuthenticationController::class, 'authenticate']);
Route::post('authorize', [AuthenticationController::class, 'create'])->name('netsuite.authorize.create');
Route::get('authorize', [AuthenticationController::class, 'index'])->name('netsuite.authorize.index');

Route::post('/updateProduct', [ProductController::class, 'updateProduct']);
Route::post('/updateCustomer', [CustomerController::class, 'updateCustomer']);

// Xero CallBack URLs
Route::get('/callback', [XeroController::class, 'index'])->name('xero.index');
Route::post('/callback', [XeroController::class, 'store'])->name('xero.store');

//Website World Routes
Route::get('featured/product/form', [WebsiteWorldController::class, 'index'])->name('ww.featured.form');
Route::post('featured/products/update', [WebsiteWorldController::class, 'updateFeaturedProducts'])->name('ww.update.featured');
// Route::get('featured/products/update', [WebsiteWorldController::class, 'getFeaturedProducts'])->name('ww.get.featured');