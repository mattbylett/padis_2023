<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\Supplier;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class SupplierController extends Controller
{
    public function index()
    {
        return view('supplier.auth.index');

    } // End Index

    public function register() 
    {
        return view('supplier.auth.register');

    } // End Register

    public function store(Request $request)
    {
        // dd($request);
        Supplier::insert([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'created_at' => Carbon::now()
        ]);

        return redirect()->route('supplier.index')->with('success', 'Supplier User Created Successfully');


    } // End Store

    public function login(Request $request) 
    {
        // dd($request);

        $data = $request->all();
        if(Auth::guard('supplier')->attempt(['username' => $data['username'], 'password' => $data['password'] ]))
        {
            return redirect()->route('supplier.dashboard')->with('success', 'Logged in Successfully');
        } else {
            return back()->with('error', "Invalid Email or Password");
        };

    } // End Login


    public function dashboard()
    {
        return view('supplier.dashboard');
    }

    public function logout() 
    {
        Auth::guard('supplier')->logout();
        return redirect()->route('supplier.index')->with('success', 'Logged Out Successfully');
    } // End Method
}
