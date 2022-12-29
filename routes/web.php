<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ImportController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () 
{
    return view('welcome');
});

Route::get('/dashboard', function () 
{
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


/** ___________________-ADMIN ROUTES-_____________________________________ */

Route::prefix('admin')->group(function() 
{
    Route::get('/login', [AdminController::class, 'index'])->name('admin.index');
    Route::post('/register/store', [AdminController::class, 'store'])->name('admin.register.store');
    Route::get('/register', [AdminController::class, 'register'])->name('admin.register');
    Route::post('/login/user', [AdminController::class, 'login'])->name('admin.login');
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard')->middleware('admin');
    Route::get('/logout', [AdminController::class, 'logout'])->name('admin.logout')->middleware('admin');
});



/** ___________________-END ADMIN ROUTES-_____________________________________ */



/** ___________________-SUPPLIER ROUTES-_____________________________________ */

Route::prefix('supplier')->group(function() 
{
    Route::get('/login', [SupplierController::class, 'index'])->name('supplier.index');
    Route::post('/register/store', [SupplierController::class, 'store'])->name('supplier.register.store');
    Route::get('/register', [SupplierController::class, 'register'])->name('supplier.register');
    Route::post('/login/user', [SupplierController::class, 'login'])->name('supplier.login');
    Route::get('/dashboard', [SupplierController::class, 'dashboard'])->name('supplier.dashboard')->middleware('supplier');
    Route::get('/logout', [SupplierController::class, 'logout'])->name('supplier.logout')->middleware('supplier');
});


/** ___________________-END SUPPLIER ROUTES-_____________________________________ */

/** ___________________-PRODUCT ROUTES-_____________________________________ */
Route::prefix('products')->group(function () 
{
    Route::get('/admin/all', [ProductController::class, 'adminIndex'])->name('product.admin.index')->middleware('admin');
    Route::get('/view/single/{id}', [ProductController::class, 'viewSingle'])->name('product.view.single');
    Route::get('/edit/single/{id}', [ProductController::class, 'editSingle'])->name('product.edit.single');
    Route::get('/delete/single/{id}', [ProductController::class, 'deleteSingle'])->name('product.delete.single');
    Route::post('/update/single/{id}', [ProductController::class, 'updateSingle'])->name('product.update.single');
    Route::post("/sync/{id}", [ProductController::class, "sync"])->name("product.admin.sync")->middleware('admin');

});

/** ___________________-END PRODUCT ROUTES-_____________________________________ */

/** ___________________-IMPORT  ROUTES-_____________________________________ */
Route::get('product/import', [ImportController::class, 'index'])->name('import.index');
Route::post('product/import/master', [ImportController::class, 'master'] )->name('import.master');
Route::post('product/import/webids', [ImportController::class, 'webids'] )->name('import.webids');

/** ___________________-IMPORT  ROUTES-_____________________________________ */